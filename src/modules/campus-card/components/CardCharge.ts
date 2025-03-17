import React, { useState } from 'react';

const CardCharge: React.FC = () => {
    const [amount, setAmount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const handleCharge = async () => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // Replace with actual API call
            const response = await fetch('/api/campus-card/charge', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount }),
            });

            if (!response.ok) {
                throw new Error('充值失败，请重试');
            }

            setSuccess(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>校园卡充值</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="请输入充值金额"
            />
            <button onClick={handleCharge} disabled={loading}>
                {loading ? '正在充值...' : '充值'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>充值成功！</p>}
        </div>
    );
};

export default CardCharge;