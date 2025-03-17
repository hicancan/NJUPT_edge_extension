import React, { useEffect, useState } from 'react';
import { fetchBorrowHistory } from '../api';

const BorrowHistory: React.FC = () => {
    const [borrowHistory, setBorrowHistory] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getBorrowHistory = async () => {
            try {
                const history = await fetchBorrowHistory();
                setBorrowHistory(history);
            } catch (err) {
                setError('无法获取借阅历史');
            } finally {
                setLoading(false);
            }
        };

        getBorrowHistory();
    }, []);

    if (loading) {
        return <div>加载中...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>个人借阅历史</h2>
            <ul>
                {borrowHistory.map((item) => (
                    <li key={item.id}>
                        <strong>{item.bookTitle}</strong> - {item.borrowDate} (到期: {item.dueDate})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BorrowHistory;