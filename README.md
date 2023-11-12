## Project Description:

This project is a small educational endeavor focused on implementing pagination,<br> theme switching, and [themoviedb API](https://developer.themoviedb.org/reference/discover-movie) integration using TypeScript.<br> It serves as my first experience with TypeScript programming.

## Acknowledgements:
I would like to express my gratitude to the [author of an article](https://dev.to/franklin030601/using-dark-mode-in-your-react-app-5364) that greatly <br>influenced the implementation of the theme switcher.<br> The entire theme switcher, implemented using the setAttribute method, was inspired by their work.


## Router and Breakpoints:
The project's router consists of a total of 5 breakpoints.<br> Three of these breakpoints control the same component, passing different callback requests <br> to the server. While this approach may not be widely applicable, I found the idea of reusing <br> the MovieList component intriguing.

## Known Issues:
During the development process, I encountered two challenges that required <br> temporary solutions or "hacks".
* [MovieInfo](https://github.com/ak-2014-marsupial/MoviesDB_mini_project/blob/main/src/components/movieContainer/MovieInfo/MovieInfo.tsx) - line 22
* [MovieList](https://github.com/ak-2014-marsupial/MoviesDB_mini_project/blob/main/src/components/movieContainer/MoviesList/MoviesList.tsx) - line 22 <br>

I hope that someone will be able to share a more elegant solution to these challenges in the future.<br>
Thank you for your interest in this project.


### Screenshorts

![All films](https://github.com/ak-2014-marsupial/MoviesDB_mini_project/blob/main/src/screenshots/AllMovies.png)


![Genres](https://github.com/ak-2014-marsupial/MoviesDB_mini_project/blob/main/src/screenshots/Genres.png)


![Movie info](https://github.com/ak-2014-marsupial/MoviesDB_mini_project/blob/main/src/screenshots/MovieInfo.png)
