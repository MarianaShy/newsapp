import { newsProp } from "./article.types"


const Article = (props:newsProp) => {



	
return(
	<li className="flex-item">
	<a className="article" href={props?.news?.url} target="_blank">		
		<img src={props?.news?.urlToImage} alt="Main picture for the article" className="article-img"/>
		<h4 className="article-title">{props?.news?.title}</h4>
	</a>
</li>
)
}



export default Article