import React from 'react';


interface SearchContextValue {
	searchRequest: string;
	setSearchRequest: (search: string) => void;

}

export const SearchContext = React.createContext<SearchContextValue>({
	searchRequest: "Search",
	setSearchRequest: () => {},
	
});