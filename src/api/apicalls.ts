const apikey: string = '5f295d3f8d17e27636cce03272611aea';

export const baseImagePath = (size: string, path: string) => {
    return `https://image.tmdb.org/t/p/${size}${path}`;
}



export const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`
export const topRatedMovies: string = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`
export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`
export const upcomingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`
export const marvelMovies: string = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_companies=420`

export const searchMovies = (keyword: string) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`;
} 

export const getMovieDetails = (movieId: number) => {
    return `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}`;
}

export const getMovieCast = (idCast: number) => {
    return `https://api.themoviedb.org/3/movie/${idCast}/credits?api_key=${apikey}`;
}

// Ajoutez ces constantes pour les IDs de genre TMDB
export const GENRE_IDS = {
  ALL: 'top_rated',
  ROMANCE: 10749,
  SPORT: 18, 
  KIDS: 16, 
  HORROR: 27
};

// Nouvelle fonction pour récupérer les films par genre
export const getMoviesByGenre = (genreId: number | string) => {
  if (genreId === 'top_rated') {
    return `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&page=1`;
  }
  return `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=${genreId}`;
}

