import { useEffect, useState, useContext, useMemo } from 'react'


import Page from '../../components/page'
import RightSection from '../../components/right-section/Right-section'
import { LanguageContext } from '../../../utils/context/languageContext';
import { SearchContext } from '../../../utils/context/searchContext';




const SEARCH = () => {
	
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const { language } = useContext(LanguageContext);
	const [error, setError] = useState<string | null>(null);
	const { searchRequest } = useContext(SearchContext);

SearchContext

	const getNews = async (url: string) => {
		try {
			setLoading(true);
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error('Failed to fetch news');
		   }
			const data = await response.json();
			setNews(data.articles);
			setLoading(false);
		} catch (err) {
		   console.error(err);
			setError('Failed to fetch news');
			setLoading(false);
		} 
	};


const searchNewsUrl = `https://gnews.io/api/v4/search?q=${searchRequest ? searchRequest : "culture"}&lang=${language}&country=any&max=10&apikey=3bdcdeac262193d5961f84b88e87d854`
useEffect(()=>{
		getNews(searchNewsUrl)
  },[language, searchRequest])

  const memoizedRightSection = useMemo(() => <RightSection />, []); 

	return (
		<>
		{loading ? 
		(<div className='message-to-user'>Loading...</div>) :
		error ? ( 
		<div className='message-to-user'>{error}</div>
  ) :
		
			<main className='main-page'>
				<Page news={news} />
				{memoizedRightSection}
			</main>
		
			
		}
	</>
	)
	
}


export default SEARCH;




