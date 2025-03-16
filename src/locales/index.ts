/**
 * Application Localization
 * Contains all text translations for the application
 */

export interface Translations {
    missingNumber: string;
    // Add other translation keys as needed
}

export interface LocaleMessages {
    ua: Translations;
    en: Translations;
}

export const messages: LocaleMessages = {
    ua: {
        missingNumber: "Яке число пропущено в послідовності?"
    },
    en: {
        missingNumber: "What number is missing in the sequence?"
    }
};

export default messages; 