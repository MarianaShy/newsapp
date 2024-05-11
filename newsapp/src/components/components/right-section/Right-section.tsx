import Article from "../article/Article";
import  { pageProp } from "./page.types"

import { useEffect, useState } from 'react'



const RightSection = () => {
	let count = 0
		
	const [news, setNews] = useState([])


	const getNews = async (url: string) => {
		try {
		  const response = await fetch(url);
		  const data = await response.json();
		  setNews(data.articles);
		} catch (err) {
		  console.error(err);
		}
	 };


const leftNewsUrl = `https://newsapi.org/v2/everything?q="world"&sortBy="publishedAt"&language=en&apiKey=6046867fa79f4b379c70524289a2823b`
 
useEffect(()=>{
		getNews(leftNewsUrl)
  },[""])

	return (
		<div className="right-article-flex">
			<h3 className="right-article-flex__title"><span className='emphasized'>/  </span>World news</h3>
			<ul >
					{news?.map((data: pageProp) => {
						if(data?.title && data?.urlToImage){
							if(count < 10){
								count++;
								const id = `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
								return <>
									<Article news={data} key={id}/>
								</>
							}
						}
					})}
				</ul>
		</div>
	)
	
}

export default RightSection