// src/modules/edu-admin/api.ts

import axios from 'axios';

const BASE_URL = 'https://api.njupt.edu.cn/edu-admin';

export const getSchedule = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/schedule`, {
            params: { userId }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching schedule:', error);
        throw error;
    }
};

export const getGrades = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/grades`, {
            params: { userId }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching grades:', error);
        throw error;
    }
};

export const calculateGPA = (grades) => {
    const totalPoints = grades.reduce((acc, grade) => acc + grade.points, 0);
    const totalCredits = grades.reduce((acc, grade) => acc + grade.credits, 0);
    return totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0;
};

export const getExamInfo = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/exam-info`, {
            params: { userId }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching exam information:', error);
        throw error;
    }
};