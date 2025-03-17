// src/core/auth/login.ts
import { apiClient } from '../../utils/api-client';

interface LoginResponse {
    success: boolean;
    token?: string;
    message?: string;
}

export async function login(username: string, password: string): Promise<LoginResponse> {
    try {
        const response = await apiClient.post('/login', { username, password });
        if (response.data.success) {
            return {
                success: true,
                token: response.data.token,
            };
        } else {
            return {
                success: false,
                message: response.data.message || '登录失败',
            };
        }
    } catch (error) {
        return {
            success: false,
            message: '网络错误，请稍后再试',
        };
    }
}