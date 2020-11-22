import React from 'react';
import MovieDetails from './MovieDetailitem';
import PropTypes from 'prop-types';
import { useMovieDetailsById, UseVotes } from '../../../hooks/getData';

const MovieDetailContainer = ({ match }) => {
  const { loading, movies } = useMovieDetailsById(match.params.movie_id);
  const { votes } = UseVotes(match.params.movie_id);


  const element = (
    <MovieDetails refrence={movies.id} title={movies.title} imageSource={movies.poster} length={movies.length} 
      plot={movies.plot} voteData={votes[0]}/>
  );
  


  return (
    <>
      {loading ? <div>
        <h1>Loading...</h1>
      </div>
        : <>
          <ul>
            {element}
          </ul>
        </>}
    </>
    
  );
};

MovieDetailContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movie_id: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};
  

export default MovieDetailContainer;
