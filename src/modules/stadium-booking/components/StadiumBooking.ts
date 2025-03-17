import React, { useState, useEffect } from 'react';
import { fetchStadiums, bookStadium } from '../api';

const StadiumBooking = () => {
    const [stadiums, setStadiums] = useState([]);
    const [selectedStadium, setSelectedStadium] = useState(null);
    const [bookingDate, setBookingDate] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const loadStadiums = async () => {
            const data = await fetchStadiums();
            setStadiums(data);
        };
        loadStadiums();
    }, []);

    const handleBooking = async () => {
        if (selectedStadium && bookingDate) {
            const response = await bookStadium(selectedStadium, bookingDate);
            if (response.success) {
                setMessage('场馆预约成功！');
            } else {
                setMessage('预约失败，请重试。');
            }
        } else {
            setMessage('请选择场馆和日期。');
        }
    };

    return (
        <div>
            <h2>体育场馆预约</h2>
            <div>
                <label>选择场馆:</label>
                <select onChange={(e) => setSelectedStadium(e.target.value)}>
                    <option value="">请选择</option>
                    {stadiums.map((stadium) => (
                        <option key={stadium.id} value={stadium.id}>
                            {stadium.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>预约日期:</label>
                <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                />
            </div>
            <button onClick={handleBooking}>预约</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default StadiumBooking;