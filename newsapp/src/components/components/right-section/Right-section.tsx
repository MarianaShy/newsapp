import Article from "../article/Article";
import  { pageProp } from "../page/page.types"


const RightSection = (props:pageProp) => {
	let count = 0

	return (
		
				<ul className="right-article-flex">
					{props?.news?.map((data:any) => {
						if(data?.title && data?.urlToImage){
							console.log(data)
							if(count < 10){
								count++
								return <>
									<Article news={data}/>
								</>
							}
						}
					})}
				</ul>
		
		
		
	)
	
}

export default RightSection