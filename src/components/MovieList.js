import MovieCard from './MovieCard'

const MovieList = ({ title, movies  }) => {
  console.log('movies', movies)
//   // Ensure there are movies to display
//   if (movies === null) {
//     return null // Return null if there are no movies
//   }

  return (
    <div className='px-6 '>
         <h1 className='text-3xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll '>
        <div className='flex'>
          {movies?.map((movie, index) => (
            <MovieCard
              key={index}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
