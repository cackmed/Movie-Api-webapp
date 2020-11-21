import React, { useState } from 'react';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';
import { useSearchTerm } from '../../hooks/getData';


const Search = () => {
  const { loading, searchTermResponse, setSearchTerm } = useSearchTerm('inception');
  const [search, setSearch] = useState('');




  const listElements = searchTermResponse.map((searchItem, i) => {
    return (
      <MovieItem key={i} id={searchItem.id} title={searchItem.title} imageSource={searchItem.image} />
    );
  });


  return (
    <>
      <article>
        <h2>Type what Movie you want to search for and then click the button to see the results</h2>
        <input type='text' onChange={({ target }) => setSearch(target.value)}></input> 
        <button onClick={() => setSearchTerm(search)}>Click Here</button>
      </article>
      {loading ? <div>
        <h1>Loading...</h1>
      </div>
        : <>
      
          <ul>
            {listElements}
          </ul>
      
        </>}
    </>

  );
};

Search.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
  
export default Search;
