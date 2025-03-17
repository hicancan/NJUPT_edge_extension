// preferences.ts
export interface UserPreferences {
    theme: 'light' | 'dark';
    notificationsEnabled: boolean;
    language: string;
}

export const defaultPreferences: UserPreferences = {
    theme: 'light',
    notificationsEnabled: true,
    language: 'zh-CN',
};

export function loadPreferences(): UserPreferences {
    const preferences = localStorage.getItem('userPreferences');
    return preferences ? JSON.parse(preferences) : defaultPreferences;
}

export function savePreferences(preferences: UserPreferences): void {
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
}