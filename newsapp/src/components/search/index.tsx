import { SearchContext } from '../../utils/context/searchContext';
import React, { useContext } from 'react';



function SEARCH() {

	const { searchRequest, setSearchRequest } = useContext(SearchContext);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	  setSearchRequest(e.target.value);
	};

console.log(searchRequest)
	return (
		<form>
			<input type="text" name="searchRequest" value={searchRequest} onChange={handleChange}/>
			<button type="submit">Search</button>
			<p>searchRequest</p>
	   </form>
);
}

export default SEARCH;
