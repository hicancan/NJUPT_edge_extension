import React, { useState } from 'react';

const BookSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        if (!query) return;

        try {
            const response = await fetch(`https://api.library.njupt.edu.cn/search?query=${encodeURIComponent(query)}`);
            const data = await response.json();
            setResults(data.books || []);
        } catch (error) {
            console.error('Error fetching book data:', error);
        }
    };

    return (
        <div className="book-search">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="输入书名或作者"
            />
            <button onClick={handleSearch}>搜索</button>
            <div className="search-results">
                {results.length > 0 ? (
                    results.map((book) => (
                        <div key={book.id} className="book-item">
                            <h3>{book.title}</h3>
                            <p>作者: {book.author}</p>
                            <p>ISBN: {book.isbn}</p>
                        </div>
                    ))
                ) : (
                    <p>没有找到相关书籍</p>
                )}
            </div>
        </div>
    );
};

export default BookSearch;