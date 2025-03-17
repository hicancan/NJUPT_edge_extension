import React, { useEffect, useState } from 'react';
import { getCardBalance } from '../api';

const CardBalance: React.FC = () => {
    const [balance, setBalance] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const data = await getCardBalance();
                setBalance(data.balance);
            } catch (err) {
                setError('无法获取余额信息');
            } finally {
                setLoading(false);
            }
        };

        fetchBalance();
    }, []);

    if (loading) {
        return <div>加载中...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>校园卡余额</h2>
            <p>当前余额: ¥{balance?.toFixed(2)}</p>
        </div>
    );
};

export default CardBalance;