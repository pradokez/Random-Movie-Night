/* eslint-disable react/prop-types */
const MoviePage = ({movie}) => {
    const banner = movie.posterURLs.original;
    return (
        <>
            <img src={banner} width={342}/>
            <h1>{movie.originalTitle}</h1>
            <p>{movie.overview}</p>
        </>
    )
}

export default MoviePage;