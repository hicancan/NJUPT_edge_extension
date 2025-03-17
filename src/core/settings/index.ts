// src/core/settings/index.ts
import { getPreferences, setPreferences } from './preferences';

export interface UserSettings {
    theme: 'light' | 'dark';
    notificationsEnabled: boolean;
}

export const defaultSettings: UserSettings = {
    theme: 'light',
    notificationsEnabled: true,
};

export const loadSettings = async (): Promise<UserSettings> => {
    const preferences = await getPreferences();
    return { ...defaultSettings, ...preferences };
};

export const saveSettings = async (settings: UserSettings): Promise<void> => {
    await setPreferences(settings);
};