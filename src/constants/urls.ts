const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const genres = '/genre/movie/list';
const search  = '/search/movie';
const posterURL = 'https://image.tmdb.org/t/p/w500'

const urls = {
    movies: {
        baseByPage: (page: number) => `${movies}?page=${page}`,
        byGenreId: (genreIds: number, page: number) : string => `${movies}?api_key=d031e7f38834f2d640ae4a98140c550f&with_genres=${genreIds}&page=${page}`
    },
    genres: {
        base: genres,
    },
    search: {
        byKeyWord: (keyWord: string, page: number) : string => `${search}?query=${keyWord}&page=${page}`
    }
}

export {baseURL, urls, posterURL}