import { useEffect, useState } from 'react'
import Page from '../../components/page'
import RightSection from '../../components/right-section/Right-section'




const SPORT = () => {
	
	const [news, setNews] = useState([])
	const [loading, setLoading] = useState(true);


	const getNews = async() =>{
		try{
			setLoading(true);
			 await fetch(`https://newsapi.org/v2/everything?q="sport"&sortBy="publishedAt"&language=en&apiKey=6046867fa79f4b379c70524289a2823b`)
			 .then(res => res.json())
			 .then(json => setNews(json.articles))
			 setLoading(false);
		}catch(err){
			 console.error(err)
		}
  }


  useEffect(()=>{
		getNews()
  },[""])

	
	return (
	<>
		{loading ? 
		(<div>"Loading..."</div>) :
			<main className='main-page'>
				<Page news={news} />
				<RightSection news={news} />
			</main>
		}
	</>
	)
	
}





export default SPORT;




