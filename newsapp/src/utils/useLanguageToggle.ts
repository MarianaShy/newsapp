import { useState } from 'react';

const useLanguageToggle = () => {
    const [language, setLanguage] = useState<string>("en");

    const toggleLanguage = () => {
        setLanguage(prevLanguage => prevLanguage === 'en' ? 'swedish' : 'en');
    };

    return { language, toggleLanguage };
};

export default useLanguageToggle;