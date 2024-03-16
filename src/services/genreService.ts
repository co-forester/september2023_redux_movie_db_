import {IRes} from "../types";
import {apiService} from "./apiService";
import {urls} from "../constants";
import {IGenres} from "../interfaces/genresInterface";

const genreService = {
    getAll: (): IRes<IGenres> =>apiService.get(urls.genres.base)
}

export {genreService}