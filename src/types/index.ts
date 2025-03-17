// src/types/index.ts
export interface User {
    id: string;
    name: string;
    email: string;
    role: 'student' | 'teacher' | 'admin';
}

export interface CampusCard {
    cardNumber: string;
    balance: number;
    transactionHistory: Transaction[];
}

export interface Transaction {
    date: string;
    amount: number;
    type: 'debit' | 'credit';
    description: string;
}

export interface Course {
    courseId: string;
    courseName: string;
    credits: number;
    schedule: Schedule[];
}

export interface Schedule {
    day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
    startTime: string;
    endTime: string;
}

export interface Grade {
    courseId: string;
    score: number;
    semester: string;
}

export interface Notification {
    id: string;
    title: string;
    message: string;
    date: string;
    read: boolean;
}

export interface Book {
    title: string;
    author: string;
    isbn: string;
    availableCopies: number;
}

export interface BorrowRecord {
    bookId: string;
    borrowDate: string;
    returnDate: string | null;
}