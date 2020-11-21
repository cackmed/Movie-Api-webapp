import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieItem.css';




const MovieItem = ({ id, title, imageSource }) => {


  return (
    <Link key={id} to={`/movieDetail/${id}`}>
      <article className={styles.article}>
        <div>
          <img src={imageSource}/>
          <h3>{title}</h3>
        </div>
      </article>
    </Link>
    
  );
};

MovieItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
};

export default MovieItem;
