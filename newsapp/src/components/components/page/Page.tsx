import { useLocation } from 'react-router-dom';


import Article from "../article";
import  { pageProp } from "./page.types"
import "./page.css"


const Page = (props:pageProp) => {
	let count = 0
	const location = useLocation();
	const url = location.pathname.slice(1).split('+').map((word, index) => index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word).join(' ');;

	return (
		<div className="left-article-flex">
			<h2 className="right-article-flex__title"><span className='emphasized'>/  </span>{url}</h2>
			<ul>
					{props?.news?.map((data:any) => {
						if(data?.title && data?.urlToImage){
							if(count < 10){
								count++
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

export default Page