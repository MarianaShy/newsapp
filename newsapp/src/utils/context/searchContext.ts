import React from 'react';


interface SearchContextValue {
	searchRequest: string | null;
	setSearchRequest: (search: string) => void;

}

export const SearchContext = React.createContext<SearchContextValue>({
	searchRequest: null,
	setSearchRequest: () => {},
	
});