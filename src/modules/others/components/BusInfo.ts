import React, { useEffect, useState } from 'react';

const BusInfo: React.FC = () => {
    const [busSchedule, setBusSchedule] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBusSchedule = async () => {
            try {
                const response = await fetch('/api/bus-schedule'); // Replace with actual API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBusSchedule(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBusSchedule();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>校车信息</h2>
            <ul>
                {busSchedule.map((bus, index) => (
                    <li key={index}>
                        {bus.route}: {bus.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BusInfo;