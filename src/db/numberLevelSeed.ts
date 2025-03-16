import pool from "../config/db";
import messages from '../locales';
import { Level } from '../types/level.types';

const createLevels = (): Level[] => {
    return [
        {
            id: 1,
            headerEn: messages.en.missingNumber,
            headerUa: messages.ua.missingNumber,
            // ... rest of the level data
        },
        // ... other levels
    ];
};

const insertNumberGridLevels = async (): Promise<void> => {
    try {
        const levels = createLevels();
        // Implementation
    } catch (error) {
        console.error('Error inserting number grid levels:', error);
    }
};

export default insertNumberGridLevels;

// Create a separate localization file
export const translations = {
    ua: {
        missingNumber: "Яке число пропущено в послідовності?"
    },
    en: {
        missingNumber: "What number is missing in the sequence?"
    }
};

// Use translations in the levels
export const numberLevels = levels.map(level => ({
    ...level,
    headerEn: translations.en.missingNumber,
    headerUa: translations.ua.missingNumber
}));