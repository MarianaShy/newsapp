import { Outlet } from 'react-router-dom';
import { SearchContext } from '../../utils/context/searchContext';
import { useState } from 'react';



function ROOT() {
	
	const [ searchRequest, setSearchRequest ] = useState<string>("Test");
	

	return (<>
		<SearchContext.Provider
			 value={{ searchRequest, setSearchRequest }}
		>
			 <header>
				 navigation
			 </header>
			 <main>
				  <Outlet />
			 </main>
			 <footer>
				footer
			 </footer>
		</SearchContext.Provider>
  </>);
}

export default ROOT;
