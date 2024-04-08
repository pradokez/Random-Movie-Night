/* eslint-disable react/prop-types */
const MoviePage = ({movie}) => {
    const banner = movie.posterURLs[342];
    const streamingInfoArray = Object.entries(movie.streamingInfo);
    const streaming = streamingInfoArray[0][0];
    const movieUrl = streamingInfoArray[0][1].us.link;

    return (
        <>
        <div className="movie-info">
            <div className='movie-banner' style={{backgroundImage: `url(${banner})`,}}>
            <a href={movieUrl} target="_blank" rel="noopener noreferrer"><img src={`/src/assets/icon-${streaming}.svg`} style={{margin: '10px', zIndex: 3}}/></a>
            </div>
            <h1>{`${movie.originalTitle} (${movie.year})`}</h1>
            <p>{movie.overview}</p>
        </div>
        <div className="semi-ellipse-top"/>
        <div className="semi-ellipse-bottom"/>
        </>
    )
}

export default MoviePage;