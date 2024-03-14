import {apiService} from "./apiService";

import {urls} from "../constants";
import {IRes} from "../types";
import {IMovies} from "../interfaces";

const  movieService = {
    getAll: (page = 1): IRes<IMovies> => apiService.get(urls.movies.baseByPage(page)),
    // getAllByGenre: (genreIds: number, page=1): IRes<IMoviesGenre> => apiService.get(urls.movies.byGenreId(genreIds, page)),
    // getKeyWord: (keyWord: string, page= 1): IRes<IMovies> => apiService.get(urls.search.byKeyWord(keyWord, page))
}

export {movieService}