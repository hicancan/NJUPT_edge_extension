// src/core/auth/index.ts

import { loginUser } from './login';

export const AuthService = {
    login: async (username: string, password: string) => {
        try {
            const response = await loginUser(username, password);
            if (response.success) {
                // Handle successful login
                return response.data;
            } else {
                throw new Error(response.message);
            }
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    },
    logout: () => {
        // Handle logout logic
        console.log('User logged out');
    },
    isAuthenticated: () => {
        // Check if user is authenticated
        return !!localStorage.getItem('authToken');
    }
};