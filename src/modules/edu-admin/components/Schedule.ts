import React, { useEffect, useState } from 'react';
import { fetchSchedule } from '../api';

const Schedule = () => {
    const [schedule, setSchedule] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getSchedule = async () => {
            try {
                const data = await fetchSchedule();
                setSchedule(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getSchedule();
    }, []);

    if (loading) {
        return <div>加载中...</div>;
    }

    if (error) {
        return <div>错误: {error}</div>;
    }

    return (
        <div>
            <h2>课程表</h2>
            <table>
                <thead>
                    <tr>
                        <th>课程名称</th>
                        <th>教师</th>
                        <th>时间</th>
                        <th>地点</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((item, index) => (
                        <tr key={index}>
                            <td>{item.courseName}</td>
                            <td>{item.teacher}</td>
                            <td>{item.time}</td>
                            <td>{item.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;