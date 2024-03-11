/* eslint-disable react/prop-types */
const MoviePage = ({movie}) => {
    console.log(movie)
    const banner = movie.posterURLs.original;
    return (
        <>
        <div className="movie-info">
            <img src={banner} width={342}/>
            <h1>{`${movie.originalTitle} (${movie.year})`}</h1>
            <p>{movie.overview}</p>
        </div>
        <div className="semi-ellipse-top"/>
        <div className="semi-ellipse-bottom"/>
        </>
    )
}

export default MoviePage;