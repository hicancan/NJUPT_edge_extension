import React, { useEffect, useState } from 'react';

const EducationNews: React.FC = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('/api/education-news'); // Replace with actual API endpoint
                const data = await response.json();
                setNews(data);
            } catch (error) {
                console.error('Error fetching education news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="education-news">
            <h2>教育相关新闻</h2>
            <ul>
                {news.map((item, index) => (
                    <li key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">阅读更多</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EducationNews;