// src/modules/library/api.ts
import axios from 'axios';

const BASE_URL = 'https://library.njupt.edu.cn/api'; // Replace with actual library API endpoint

export const fetchBooks = async (query: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/books`, {
            params: { query }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};

export const fetchBookDetails = async (bookId: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/books/${bookId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching book details:', error);
        throw error;
    }
};

export const fetchBorrowHistory = async (userId: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${userId}/borrow-history`);
        return response.data;
    } catch (error) {
        console.error('Error fetching borrow history:', error);
        throw error;
    }
};