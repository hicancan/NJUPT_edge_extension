// This file contains utility functions for handling user notifications in the NJUPT Edge Extension.

export function showNotification(title: string, message: string) {
    const notificationOptions = {
        type: 'basic',
        iconUrl: 'src/assets/icons/icon-128.svg',
        title: title,
        message: message,
    };

    chrome.notifications.create('', notificationOptions, (notificationId) => {
        console.log('Notification displayed with ID:', notificationId);
    });
}

export function clearNotification(notificationId: string) {
    chrome.notifications.clear(notificationId, (wasCleared) => {
        if (wasCleared) {
            console.log('Notification cleared:', notificationId);
        } else {
            console.log('Failed to clear notification:', notificationId);
        }
    });
}