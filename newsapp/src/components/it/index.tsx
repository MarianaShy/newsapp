import { useContext } from 'react';
import { SearchContext } from '../../utils/context/searchContext';

function IT() {

	const { searchRequest } = useContext(SearchContext);

	return <div>It {searchRequest}</div>;
}

export default IT;
