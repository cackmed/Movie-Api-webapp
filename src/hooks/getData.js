import { useState, useEffect } from 'react';
import { get } from '../services/fetchApi';


export const useSearchTerm = searchTerm => {
  const [loading, setLoading] = useState(true);
  const [searchTermResponse, setsearchTermResponse] = useState([]);
  
  useEffect(() => {
    get(`/movies/search/${searchTerm}`)
      .then(resObject => {
        setsearchTermResponse(resObject);
      })
      .finally(() => setLoading(false));
  }, []);
  
  return { loading, searchTermResponse };
};

export const useMovieDetailsById = id => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    get(`/movies/film/${id}`)
      .then(resObject => {
        setMovies(resObject);
      })
      .finally(() => setLoading(false));
  }, []);
  
  return { loading, movies };
};

export const UseVotes = ref => {
  const [loading, setLoading] = useState(true);
  const [votes, setVotes] = useState([]);
    
  useEffect(() => {
    get(`/movies/filmRef/${ref}`)
      .then(resObject => {
        setVotes(resObject);
      })
      .finally(() => setLoading(false));
  }, []);
    
  return { loading, votes };
};
