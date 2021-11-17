import React, { useState } from 'react';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';
import { useSearchTerm } from '../../hooks/getData';
import { Redirect } from 'react-router';


const Search = () => {
  const { loading, searchTermResponse, setSearchTerm } = useSearchTerm('inception');
  const [search, setSearch] = useState('');




  const listElements = searchTermResponse.map((searchItem, i) => {
    return (
      <MovieItem key={i} id={searchItem.id} title={searchItem.title} imageSource={searchItem.image} />
    );
  });

    const redirectTest = () => {
    const newWindow = window.open('', '_blank')

    setTimeout(() => {   newWindow.location.href = 'http://www.google.com'  }, 7000)
    setTimeout(() => {   newWindow.close()  }, 12000)

  }


  return (
    <>
      <article>
        <h2>Type what Movie you want to search for and then click the button to see the results</h2>
        <input type='text' onChange={({ target }) => setSearch(target.value)}></input> 
        <button onClick={() => setSearchTerm(search)}>Click Here</button>
        <button onClick={() => redirectTest()}>test pop up</button>
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
