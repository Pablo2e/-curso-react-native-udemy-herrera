import React from 'react';
import movieDB from '../api/movieDB';
import {MovieFull} from '../interfaces/movieInterface';
import {CreditsResponse, Cast} from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = React.useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = await movieDB.get<CreditsResponse>(
      `/${movieId}/credits`,
    );
    const [movieDetailsResp, castResp] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castResp.data.cast,
    });
  };

  React.useEffect(() => {
    getMovieDetails();
  }, []);

  return {...state};
};
