import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'c53939de6fa5dba96aa6a0162b3cb92e',
    language: 'es-ES',
  },
});

export default movieDB;
