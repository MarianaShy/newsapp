import { useContext } from 'react';

import './home.css'
import { LanguageContext } from '../../../utils/context/languageContext';


function HOME() {
	const { language } = useContext(LanguageContext);
	return (
		<>
		{language==="en" ? 
		(<div className="home content">
		<h2 className="home__main-title">Welcome to <span className='emphasized'>NewsToday!</span></h2>
		<section>
			<p className="home__text">Welcome to NewsApp, your go-to destination for the latest news updates from around the world! Whether you're interested in politics, sports, or informational technologies, we've got you covered.
			</p>
			<h3 className="home__title">Explore the Latest News
			</h3>
			<h3 className="home__title">Stay Updated on Worldwide News
			</h3>
			<p className="home__text">On the right-hand side of your screen, you'll find a curated selection of articles featuring worldwide news. From breaking headlines to fascinating stories, explore a diverse range of topics that matter to you.
			</p>
			<ul>
				<li> <span className='emphasized'> Politics:</span>  Stay informed about the latest developments in the political landscape, both domestically and internationally.
				</li>
				<li> <span className='emphasized'>Sport:</span> Get your adrenaline pumping with the latest updates from the world of sports, including thrilling matches, athlete achievements, and more.
				</li>
				<li> <span className='emphasized'>Informational Technologies:</span> Dive into the world of tech with the latest news, trends, and innovations in informational technologies.
				</li>
			</ul>
			<h3 className="home__title">Search for News
			</h3>
			<p className="home__text">Looking for something specific? Use our handy search feature to find news articles on any topic of your choice. Simply enter your query in the search bar at the top of the page and discover relevant articles in seconds.
			</p>
			<h3 className="home__title">Language Options
			</h3>
			<p className="home__text">Prefer to read the news in Swedish? No problem! You can easily switch between English and Swedish languages to tailor your NewsApp experience to your preferences.
			</p>
			<h3 className="home__title">Stay Connected
			</h3>
			<p className="home__text">Don't miss out on any important updates! Follow us on social media and subscribe to our newsletter to stay connected and receive the latest news straight to your inbox.
			</p>
			<h3 className="home__title">Start Exploring Now!
			</h3>
			<p className="home__text">Get started now and dive into a world of news, information, and entertainment with NewsApp. Whether you're a news enthusiast or just looking to stay informed, we've got everything you need right here.
			</p>
		</section>
		
	</div>) :
		
		(<div className="home content">
		<h2 className="home__main-title">Välkommen till <span className='emphasized'>NyheterIdag!</span></h2>
			<section>
				<p className="home__text">Välkommen till Nyhetsappen, din destination för de senaste nyhetsuppdateringarna från hela världen! Oavsett om du är intresserad av politik, sport eller informationsteknik har vi dig täckt.
				</p>
				<h3 className="home__title">Utforska de senaste nyheterna
				</h3>
				<h3 className="home__title">Håll dig uppdaterad om världsnyheter
				</h3>
				<p className="home__text">På höger sida av din skärm hittar du ett urval av artiklar med världsnyheter. Från de senaste rubrikerna till fascinerande berättelser kan du utforska ett mångfald av ämnen som betyder något för dig.
				</p>
				<ul>
					<li> <span className='emphasized'> Politik:</span>  Håll dig informerad om de senaste utvecklingarna inom politiken, både nationellt och internationellt.
					</li>
					<li> <span className='emphasized'>Sport:</span> Få adrenalinet att pumpa med de senaste uppdateringarna från sportvärlden, inklusive spännande matcher, idrottsmäns prestationer och mer.
					</li>
					<li> <span className='emphasized'>Informationsteknik:</span> Dyk in i teknikens värld med de senaste nyheterna, trenderna och innovationerna inom informationsteknik.
					</li>
				</ul>
				<h3 className="home__title">Sök efter nyheter
				</h3>
				<p className="home__text">Letar du efter något specifikt? Använd vår praktiska sökfunktion för att hitta nyhetsartiklar om vilket ämne som helst. Ange helt enkelt din fråga i sökrutan högst upp på sidan och upptäck relevanta artiklar på några sekunder.
				</p>
				<h3 className="home__title">Språkalternativ
				</h3>
				<p className="home__text">Föredrar du att läsa nyheter på svenska? Inga problem! Du kan enkelt växla mellan engelska och svenska språk för att anpassa din upplevelse av Nyhetsappen efter dina preferenser.
				</p>
				<h3 className="home__title">Håll dig uppkopplad
				</h3>
				<p className="home__text">Miss inte några viktiga uppdateringar! Följ oss på sociala medier och prenumerera på vårt nyhetsbrev för att hålla dig uppkopplad och få de senaste nyheterna direkt till din inkorg.
				</p>
				<h3 className="home__title">Börja utforska nu!
				</h3>
				<p className="home__text">Kom igång nu och dyk in i en värld av nyheter, information och underhållning med Nyhetsappen. Oavsett om du är en nyhetsentusiast eller bara vill hålla dig informerad har vi allt du behöver här.
				</p>
			</section>
		</div>)
		}
	</>
	)

}

export default HOME;
