import { useEffect, useState, useContext, useMemo } from 'react'



import Page from '../../components/page'
import RightSection from '../../components/right-section/Right-section'
import { LanguageContext } from '../../../utils/context/languageContext';




const SPORT = () => {
	
	const [news, setNews] = useState([])
	const [loading, setLoading] = useState(true);
	const { language } = useContext(LanguageContext);
	const [error, setError] = useState<string | null>(null);



	const getNews = async(url: string) =>{
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

  const sportNewsUrl = `https://gnews.io/api/v4/top-headlines?category=sports&lang=${language}&country=us&max=10&apikey=3bdcdeac262193d5961f84b88e87d854`

  useEffect(()=>{
		getNews(sportNewsUrl)
  },[language])

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


export default SPORT;




