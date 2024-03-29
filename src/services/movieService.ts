import {apiService} from "./apiService";

import {urls} from "../constants";
import {IRes} from "../types";
import {IMovies, IMoviesGenre} from "../interfaces";

const movieService = {
    getAll: (page = 1): IRes<IMovies> => apiService.get(urls.movies.baseByPage(page)),
    getAllByGenre: (genreIds: number, page = 1): IRes<IMoviesGenre> => apiService.get(urls.movies.byGenreId(genreIds, page)),
    getKeyWord: (keyWord: string, page = 1): IRes<IMovies> => apiService.get(urls.search.byKeyWord(keyWord, page)),
    getBySort: (bySort: string, page: number): IRes<IMovies> => apiService.get(urls.movies.bySort(bySort, page))
}

export {movieService}