import React from 'react';

interface BookDetailProps {
    title: string;
    author: string;
    description: string;
    publicationDate: string;
    isbn: string;
}

const BookDetail: React.FC<BookDetailProps> = ({ title, author, description, publicationDate, isbn }) => {
    return (
        <div className="book-detail">
            <h2>{title}</h2>
            <h3>作者: {author}</h3>
            <p><strong>出版日期:</strong> {publicationDate}</p>
            <p><strong>ISBN:</strong> {isbn}</p>
            <p>{description}</p>
        </div>
    );
};

export default BookDetail;