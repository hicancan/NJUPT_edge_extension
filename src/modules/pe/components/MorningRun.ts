import React, { useState } from 'react';

const MorningRun: React.FC = () => {
    const [runData, setRunData] = useState<{ date: string; distance: number; time: string }[]>([]);
    const [distance, setDistance] = useState<number>(0);
    const [time, setTime] = useState<string>('');

    const handleAddRun = () => {
        const date = new Date().toLocaleDateString();
        setRunData([...runData, { date, distance, time }]);
        setDistance(0);
        setTime('');
    };

    return (
        <div>
            <h2>晨跑打卡</h2>
            <div>
                <label>
                    距离 (公里):
                    <input
                        type="number"
                        value={distance}
                        onChange={(e) => setDistance(Number(e.target.value))}
                    />
                </label>
            </div>
            <div>
                <label>
                    时间 (分钟):
                    <input
                        type="text"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={handleAddRun}>添加记录</button>
            <h3>跑步记录</h3>
            <ul>
                {runData.map((run, index) => (
                    <li key={index}>
                        {run.date}: {run.distance}公里, {run.time}分钟
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MorningRun;