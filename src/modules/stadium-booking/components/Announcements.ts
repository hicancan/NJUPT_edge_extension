import React from 'react';

const Announcements: React.FC = () => {
    const [announcements, setAnnouncements] = React.useState<string[]>([]);

    React.useEffect(() => {
        // Fetch announcements from the API
        const fetchAnnouncements = async () => {
            try {
                const response = await fetch('/api/stadium/announcements');
                const data = await response.json();
                setAnnouncements(data);
            } catch (error) {
                console.error('Error fetching announcements:', error);
            }
        };

        fetchAnnouncements();
    }, []);

    return (
        <div className="announcements">
            <h2>场馆通知公告</h2>
            <ul>
                {announcements.map((announcement, index) => (
                    <li key={index}>{announcement}</li>
                ))}
            </ul>
        </div>
    );
};

export default Announcements;