import React from 'react';


interface LanguageContextValue {
	language: string;
	toggleLanguage: () => void;

}

export const LanguageContext = React.createContext<LanguageContextValue>({
	language: "en",
	toggleLanguage: () => {}
	
});