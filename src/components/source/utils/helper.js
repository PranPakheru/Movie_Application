export const truncateText = (text, size) => {
  return text.slice(0, size) + "...";
};

export const genreIntersectionMovies = (genreIdList, genreMovieList) => {
  const targetGenreIds = genreIdList;
  let result = [];

  genreMovieList.map((movie) => {
    let source = movie.genre_ids;
    let modifiedSource = source.map((a) => a.toString());
    const allIncluded = targetGenreIds.every((item) =>
      modifiedSource.includes(item)
    );

    if (allIncluded) {
      result.push(movie);
    }
  });
  return getUniqueResult(result);
};

const getUniqueResult = (moviesResult) => {
  const uniqueObjects = [];
  const seenIds = {};

  for (const obj of moviesResult) {
    if (!seenIds[obj.id]) {
      uniqueObjects.push(obj);
      seenIds[obj.id] = true;
    }
  }
  return uniqueObjects;
};
