import { useEffect, useState, useContext } from 'react'



import Page from '../../components/page'
import RightSection from '../../components/right-section/Right-section'
import { LanguageContext } from '../../../utils/context/languageContext';




const POLITICS = () => {
	
	const [news, setNews] = useState([])
	const [loading, setLoading] = useState(true);
	const { language } = useContext(LanguageContext);



	const getNews = async(url:string) =>{
		try{
			setLoading(true);
			 await fetch(url)
			 .then(res => res.json())
			 .then(json => setNews(json.articles))
			 setLoading(false);
		}catch(err){
			 console.error(err)
		}
  }

  const politicsNewsUrl = `https://newsapi.org/v2/everything?q="politic"&sortBy="publishedAt"&language=${language}&apiKey=6046867fa79f4b379c70524289a2823b`

  useEffect(()=>{
		getNews(politicsNewsUrl)
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





export default POLITICS;




