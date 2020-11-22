import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { post, patch } from '../../../services/fetchApi';
import styles from './MovieDetailItem.css';

const MovieDetails = ({ refrence, title, imageSource, length, plot, voteData }) => {
  const [upVote, setUpVote] = useState(voteData?.thumbsUp || 0);
  const [downVote, setDownVote] = useState(voteData?.thumbsDown || 0);


  const handleClick = state => {
    if(state === 'upVote') {
      setUpVote(upVote + 1);
      if(voteData === undefined) {
        post('movies/', { filmRef: refrence, title: title, thumbsUp: upVote + 1, thumbsDown: downVote });
      }
      else {
        patch('movies/', { filmRef: refrence, title: title, thumbsUp: upVote + 1, thumbsDown: downVote });
      }
    }
    if(state === 'downVote') {
      setDownVote(downVote + 1);
      if(voteData === undefined) {
        post('movies/', { filmRef: refrence, title: title, thumbsUp: upVote, thumbsDown: downVote + 1 });
      }
      else {
        patch('movies/', { filmRef: refrence, title: title, thumbsUp: upVote, thumbsDown: downVote + 1 });
      } 
    }
  };




  return (
    <>
      <article className={styles.article}>
        <img src={imageSource}/>
        <div>
          <button onClick={() => handleClick('upVote')}>Up-Vote</button>
          <p>{upVote}</p>
        </div>
        <div>
          <button onClick={() => handleClick('downVote')}>Down-Vote</button>
          <p>{downVote}</p>
        </div>
        <h1>{title}</h1>
        <p>{length}</p>
        <p>{plot}</p>
      </article>
      <Link to={'/'}>
        <p>Back</p>
      </Link>
    </>
    
  );
};

MovieDetails.propTypes = {
  refrence: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  plot: PropTypes.string.isRequired,
  voteData: PropTypes.object.isRequired
};

export default MovieDetails;
