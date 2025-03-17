import React, { useEffect, useState } from 'react';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Fetch notifications from the API
        const fetchNotifications = async () => {
            try {
                const response = await fetch('/api/notifications');
                const data = await response.json();
                setNotifications(data);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };

        fetchNotifications();
    }, []);

    return (
        <div className="notifications">
            <h2>通知公告</h2>
            <ul>
                {notifications.length > 0 ? (
                    notifications.map((notification) => (
                        <li key={notification.id}>
                            <h3>{notification.title}</h3>
                            <p>{notification.content}</p>
                            <span>{new Date(notification.date).toLocaleDateString()}</span>
                        </li>
                    ))
                ) : (
                    <li>没有通知公告</li>
                )}
            </ul>
        </div>
    );
};

export default Notifications;