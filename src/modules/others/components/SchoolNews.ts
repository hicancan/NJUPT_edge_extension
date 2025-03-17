import React, { useEffect, useState } from 'react';
import { fetchSchoolNews } from '../../api';

const SchoolNews: React.FC = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const newsData = await fetchSchoolNews();
            setNews(newsData);
        };

        getNews();
    }, []);

    return (
        <div className="school-news">
            <h2>校园新闻</h2>
            <ul>
                {news.map((item, index) => (
                    <li key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <span>{item.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SchoolNews;