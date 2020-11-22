import React from 'react';
import Search from './SearchPage/Search';
import MovieDetailContainer from './SearchPage/DetailPage/MovieDetailPageContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';


export default function App() {



  return (
    <>
      <Router>
        <Route exact path='/' component={Search} />
        <Route path='/movieDetail/:movie_id' component={MovieDetailContainer} />
      </Router>
    </>

  );
}
