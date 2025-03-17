import axios from 'axios';

const API_BASE_URL = 'https://api.njupt.edu.cn'; // Replace with the actual API base URL

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000, // Set a timeout for requests
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor to handle responses
apiClient.interceptors.response.use(
    response => {
        // Handle successful responses
        return response.data;
    },
    error => {
        // Handle errors
        console.error('API call error:', error);
        return Promise.reject(error);
    }
);

// Function to set authorization token
export const setAuthToken = (token) => {
    if (token) {
        apiClient.defaults.headers['Authorization'] = `Bearer ${token}`;
    } else {
        delete apiClient.defaults.headers['Authorization'];
    }
};

export default apiClient;