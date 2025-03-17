// src/modules/campus-card/api.ts

import axios from 'axios';

const BASE_URL = 'https://api.njupt.edu.cn/campus-card'; // Replace with the actual API endpoint

// Function to get card balance
export const getCardBalance = async (userId: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/balance`, {
            params: { userId }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching card balance:', error);
        throw error;
    }
};

// Function to get transaction history
export const getTransactionHistory = async (userId: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/transactions`, {
            params: { userId }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching transaction history:', error);
        throw error;
    }
};

// Function to recharge card
export const rechargeCard = async (userId: string, amount: number) => {
    try {
        const response = await axios.post(`${BASE_URL}/recharge`, {
            userId,
            amount
        });
        return response.data;
    } catch (error) {
        console.error('Error recharging card:', error);
        throw error;
    }
};

// Function to pay for electricity
export const payElectricity = async (userId: string, amount: number) => {
    try {
        const response = await axios.post(`${BASE_URL}/electricity`, {
            userId,
            amount
        });
        return response.data;
    } catch (error) {
        console.error('Error paying electricity:', error);
        throw error;
    }
};

// Function to pay for internet
export const payInternet = async (userId: string, amount: number) => {
    try {
        const response = await axios.post(`${BASE_URL}/internet`, {
            userId,
            amount
        });
        return response.data;
    } catch (error) {
        console.error('Error paying internet:', error);
        throw error;
    }
};