import { Outlet } from 'react-router-dom';
import { SearchContext } from '../../../utils/context/searchContext';
import { useState } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer'



function ROOT() {
	
	const [ searchRequest, setSearchRequest ] = useState<string>("Test");
	

	return (<>
		<SearchContext.Provider
			 value={{ searchRequest, setSearchRequest }}>
			 <Header  />
			 <main>
				  <Outlet />
			 </main>
			 <Footer />
		</SearchContext.Provider>
  </>);
}

export default ROOT;
