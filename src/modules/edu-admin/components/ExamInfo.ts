import React, { useEffect, useState } from 'react';

const ExamInfo = () => {
    const [examData, setExamData] = useState([]);

    useEffect(() => {
        const fetchExamData = async () => {
            try {
                const response = await fetch('/api/exams'); // Replace with actual API endpoint
                const data = await response.json();
                setExamData(data);
            } catch (error) {
                console.error('Error fetching exam data:', error);
            }
        };

        fetchExamData();
    }, []);

    return (
        <div className="exam-info">
            <h2>考试信息</h2>
            {examData.length > 0 ? (
                <ul>
                    {examData.map((exam) => (
                        <li key={exam.id}>
                            <strong>{exam.subject}</strong>: {exam.date} - {exam.time}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>没有找到考试信息。</p>
            )}
        </div>
    );
};

export default ExamInfo;