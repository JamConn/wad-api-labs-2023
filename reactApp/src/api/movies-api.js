export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=38433530d3e388556cd5c8c32b3bb3a5&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };