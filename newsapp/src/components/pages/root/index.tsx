import { Outlet } from 'react-router-dom';
import { SearchContext } from '../../../utils/context/searchContext';
import { LanguageContext } from '../../../utils/context/languageContext';
import { useCallback, useState, useEffect } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer'



function ROOT() {
	
	const [ searchRequest, setSearchRequest ] = useState<string>("Test");

	const [language, setLanguage] = useState<string>(() => {
		const storedLanguage = localStorage.getItem('language');
		return storedLanguage ? storedLanguage : 'en';
	 });
	
	 useEffect(() => {
		localStorage.setItem('language', language);
	 }, [language]);

	const toggleLanguage = useCallback(() => {
		 setLanguage(prevLanguage => prevLanguage === 'en' ? 'sv' : 'en');
	}, []);



	return (<>
	<LanguageContext.Provider value={{language, toggleLanguage}}>
		<SearchContext.Provider
			 value={{ searchRequest, setSearchRequest }}>
			 <Header  />
			 <main className='content'>
				  <Outlet />
			 </main>
			 <Footer />
		</SearchContext.Provider>
	</LanguageContext.Provider>
  </>);
}

export default ROOT;
