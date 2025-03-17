// src/core/storage/index.ts
export class StorageService {
    private storage: Storage;

    constructor() {
        this.storage = localStorage; // You can switch to IndexedDB if needed
    }

    setItem(key: string, value: any): void {
        this.storage.setItem(key, JSON.stringify(value));
    }

    getItem(key: string): any {
        const value = this.storage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    removeItem(key: string): void {
        this.storage.removeItem(key);
    }

    clear(): void {
        this.storage.clear();
    }
}