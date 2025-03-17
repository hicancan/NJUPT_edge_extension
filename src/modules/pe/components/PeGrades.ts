import React, { useEffect, useState } from 'react';

const PeGrades: React.FC = () => {
    const [grades, setGrades] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGrades = async () => {
            try {
                const response = await fetch('/api/pe/grades'); // Adjust the API endpoint as necessary
                if (!response.ok) {
                    throw new Error('网络错误，无法获取成绩');
                }
                const data = await response.json();
                setGrades(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchGrades();
    }, []);

    if (loading) {
        return <div>加载中...</div>;
    }

    if (error) {
        return <div>错误: {error}</div>;
    }

    return (
        <div>
            <h2>体育课成绩</h2>
            <ul>
                {grades.map((grade, index) => (
                    <li key={index}>
                        {grade.courseName}: {grade.score}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PeGrades;