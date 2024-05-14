import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SearchContext } from '../../../utils/context/searchContext';
import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const { setSearchRequest } = useContext(SearchContext);
  const navigate = useNavigate(); 
  const location = useLocation(); 
  const [, setSearchParams] = useSearchParams();

  const handleChange = (event:any) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    setSearchRequest(query);
    setSearchParams({ query: query });
    navigate(`/search${location.search}`);
  };

  return (
    <form onSubmit={handleSubmit} name="search">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button type="submit">Search {query}</button>
    </form>
  );
};

export default SearchForm;
