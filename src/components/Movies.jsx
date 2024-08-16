import React from 'react';
import { Movie } from './Movie';

 function Movies(props) {

   const {movies = []} = props
   console.log(movies)
      
    return <div className="movies">
        
        {movies.length ?  (movies.map((movie) => (
        <Movie key={movie.imdbID} 
        // imdbID={movie.imdbID}
        // Title={movie.Title}
        // Poster={movie.Poster} 
        // Type={movie.Type}
        // Year={movie.Type}
        {...movie}
        />
      ))):(<h4>Not Found</h4>)

    } 
    </div>;
}

export { Movies };