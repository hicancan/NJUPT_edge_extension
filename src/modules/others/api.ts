// src/modules/others/api.ts

export const fetchAppCenterData = async () => {
    // Fetch data for the application center
    const response = await fetch('/api/app-center');
    if (!response.ok) {
        throw new Error('Failed to fetch app center data');
    }
    return response.json();
};

export const fetchBusInfo = async () => {
    // Fetch bus information
    const response = await fetch('/api/bus-info');
    if (!response.ok) {
        throw new Error('Failed to fetch bus information');
    }
    return response.json();
};

export const fetchCalendarData = async () => {
    // Fetch academic calendar data
    const response = await fetch('/api/calendar');
    if (!response.ok) {
        throw new Error('Failed to fetch calendar data');
    }
    return response.json();
};

export const fetchNotifications = async () => {
    // Fetch notifications
    const response = await fetch('/api/notifications');
    if (!response.ok) {
        throw new Error('Failed to fetch notifications');
    }
    return response.json();
};

export const fetchEducationNews = async () => {
    // Fetch education news
    const response = await fetch('/api/education-news');
    if (!response.ok) {
        throw new Error('Failed to fetch education news');
    }
    return response.json();
};

export const fetchSchoolNews = async () => {
    // Fetch school news
    const response = await fetch('/api/school-news');
    if (!response.ok) {
        throw new Error('Failed to fetch school news');
    }
    return response.json();
};