import { useEffect, useState, useContext } from 'react'


import Page from '../../components/page'
import RightSection from '../../components/right-section/Right-section'
import { LanguageContext } from '../../../utils/context/languageContext';





const IT = () => {
	
	const [news, setNews] = useState([])
	const [loading, setLoading] = useState(true);
	const { language } = useContext(LanguageContext);



	const getNews = async (url: string) => {
		try {
			setLoading(true);
			const response = await fetch(url);
			const data = await response.json();
			setNews(data.articles);
			setLoading(false);
		} catch (err) {
		   console.error(err);
		}
	};


const itNewsUrl = `https://newsapi.org/v2/everything?q="technologies"&sortBy="publishedAt"&language=${language}&apiKey=6046867fa79f4b379c70524289a2823b`
useEffect(()=>{
		getNews(itNewsUrl)
  },[language])

	
	return (
		<>
		{loading ? 
		(<div className='loading'>Loading...</div>) :
			<main className='main-page'>
				<Page news={news} />
				<RightSection  />
			</main>
		}
	</>
	)
	
}





export default IT;




