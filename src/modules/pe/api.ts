// src/modules/pe/api.ts

import { apiClient } from '../../utils/api-client';

// 获取晨跑打卡记录
export const getMorningRunRecords = async (userId: string) => {
    try {
        const response = await apiClient.get(`/pe/morning-run/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching morning run records:', error);
        throw error;
    }
};

// 提交晨跑打卡
export const submitMorningRun = async (userId: string, runData: any) => {
    try {
        const response = await apiClient.post(`/pe/morning-run/${userId}`, runData);
        return response.data;
    } catch (error) {
        console.error('Error submitting morning run:', error);
        throw error;
    }
};

// 获取体育课成绩
export const getPeGrades = async (userId: string) => {
    try {
        const response = await apiClient.get(`/pe/grades/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching PE grades:', error);
        throw error;
    }
};