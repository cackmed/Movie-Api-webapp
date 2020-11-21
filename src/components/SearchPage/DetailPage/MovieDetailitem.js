import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MovieDetailItem.css';

const MovieDetails = ({ title, imageSource, length, plot, voteData }) => {

  // if(voteData === []) {

  //   const handleClick ={

  //   }
  //    const voteElements = (
  //      <>
  //       <p>Upvotes:{}</p>
  //    <p>DownVotes:{}</p>
  //     </>
  //   )
  // }
  // else {
  //   const voteElements = (

  //   )
  // }

  return (
    <>
      <article className={styles.article}>
        <img src={imageSource}/>
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
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  plot: PropTypes.string.isRequired,
};

export default MovieDetails;
