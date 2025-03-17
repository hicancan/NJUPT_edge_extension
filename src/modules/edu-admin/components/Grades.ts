import React, { useEffect, useState } from 'react';
import { fetchGrades } from '../api';

const Grades = () => {
    const [grades, setGrades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getGrades = async () => {
            try {
                const data = await fetchGrades();
                setGrades(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getGrades();
    }, []);

    if (loading) {
        return <div>加载中...</div>;
    }

    if (error) {
        return <div>错误: {error}</div>;
    }

    return (
        <div>
            <h2>成绩查询</h2>
            <ul>
                {grades.map((grade) => (
                    <li key={grade.id}>
                        {grade.courseName}: {grade.score}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Grades;