import './home.css'


function HOME() {
	return <div className="home content">
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
		
	</div>;
}

export default HOME;
