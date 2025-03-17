import React, { useState } from 'react';

const ElectricityCharge = () => {
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleCharge = async () => {
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            // Replace with actual API call
            const response = await fetch('/api/electricity-charge', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount }),
            });

            if (!response.ok) {
                throw new Error('充值失败，请重试');
            }

            setSuccess('充值成功！');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>宿舍电费充值</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="请输入充值金额"
            />
            <button onClick={handleCharge} disabled={loading}>
                {loading ? '正在充值...' : '充值'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default ElectricityCharge;