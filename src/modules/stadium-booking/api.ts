// This file contains the API requests for the stadium booking module.

import axios from 'axios';

const BASE_URL = 'https://api.njupt.edu.cn/stadium'; // Replace with the actual API endpoint

// Function to fetch available stadiums
export const fetchAvailableStadiums = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/available`);
        return response.data;
    } catch (error) {
        console.error('Error fetching available stadiums:', error);
        throw error;
    }
};

// Function to book a stadium
export const bookStadium = async (stadiumId, bookingDetails) => {
    try {
        const response = await axios.post(`${BASE_URL}/book`, {
            stadiumId,
            ...bookingDetails,
        });
        return response.data;
    } catch (error) {
        console.error('Error booking stadium:', error);
        throw error;
    }
};

// Function to fetch booking announcements
export const fetchAnnouncements = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/announcements`);
        return response.data;
    } catch (error) {
        console.error('Error fetching announcements:', error);
        throw error;
    }
};