import { useEffect, useState } from 'react'
import Page from '../../components/page'
import RightSection from '../../components/right-section/Right-section'




const IT = () => {
	
	const [news, setNews] = useState([])
	const [loading, setLoading] = useState(true);


	const getNews = async () => {
		try {
		  setLoading(true);
		  const response = await fetch(`https://newsapi.org/v2/everything?q="internet+technologies"&sortBy="publishedAt"&language=en&apiKey=6046867fa79f4b379c70524289a2823b`);
		  const data = await response.json();
		  setNews(data.articles);
		  setLoading(false);
		} catch (err) {
		  console.error(err);
		}
	 };


  useEffect(()=>{
		getNews()
  },[""])

	
	return (
		<>
		{loading ? 
		(<div className='loading'>Loading...</div>) :
			<main className='main-page'>
				<Page news={news} />
				<RightSection news={news} />
			</main>
		}
	</>
	)
	
}





export default IT;



