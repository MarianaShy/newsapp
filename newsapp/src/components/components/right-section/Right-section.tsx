import Article from "../article/Article";
import { NewsItem } from "../page/page.types";
import { useEffect, useState, useContext } from 'react'
import { LanguageContext } from '../../../utils/context/languageContext';
import SearchForm from "../search-form/search-form";




const RightSection = () => {
	let count = 0
		
	const [news, setNews] = useState([])
	const { language} = useContext(LanguageContext);



	const getNews = async (url: string) => {
		try {
		  const response = await fetch(url);
		  const data = await response.json();
		  setNews(data.articles);
		} catch (err) {
		  console.error(err);
		}
	 };


const worldNewsUrl = `https://gnews.io/api/v4/top-headlines?category=world&lang=${language}&country=any&max=10&apikey=3bdcdeac262193d5961f84b88e87d854`
 
useEffect(()=>{
		getNews(worldNewsUrl)
  },[language])
	return (
		<aside>
		<SearchForm />
		<div className="right-article-flex">
			
			<h3 className="right-article-flex__title"><span className='emphasized'>/  </span>World news</h3>
			<ul>
					{news?.map((data: NewsItem) => {
						if(data?.title && data?.image){
							if(data){
								count++;
								const id = count;
								return <>
									<Article news={data} id={id}/>
								</>
							}
						}
					})}
				</ul>
		</div>
		</aside>
	)
	
}

export default RightSection