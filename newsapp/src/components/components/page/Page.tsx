import { useLocation } from 'react-router-dom';
import {useMemo} from 'react';
import { useContext } from 'react';



import Article from "../article";
import  { pageProp, NewsItem } from "./page.types"

import "./page.css"
import { SearchContext } from '../../../utils/context/searchContext';


const Page = (props:pageProp) => {
	let count = 0
	const location = useLocation();
	const{searchRequest} = useContext(SearchContext);


	const url = useMemo(() => {
		return location.pathname
			.slice(1)
			.split('+')
			.map((word, index) => index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
			.join(' ');
   }, [location.pathname]);

	return (
		<div className="left-article-flex">
			<h2 className="left-article-flex__title"><span className='emphasized'>/  </span>{url==="Search" ? url  + " for " + searchRequest + " news " : url}</h2>
			{props.news?.length > 0 ? (
			<ul className='articles'>
					{props?.news?.map((data:NewsItem) => {
						if(data?.title && data?.image){
							if(data){
								count++
								const id = count;
								return <>
									<Article news={data} id={id}/>
								</>
							}
						}
					})}
			</ul>
			   ) : (
				<p>    No results have been found</p>)}
		</div>

				

	)
	
}

export default Page