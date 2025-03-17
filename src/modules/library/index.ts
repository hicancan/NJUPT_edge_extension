// This file serves as the entry point for the library module, handling library-related functionalities and interactions.

import { BookSearch } from './components/BookSearch';
import { BookDetail } from './components/BookDetail';
import { BorrowHistory } from './components/BorrowHistory';

// Initialize the library module
export const libraryModule = {
    BookSearch,
    BookDetail,
    BorrowHistory,
};