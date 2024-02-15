import PropTypes from 'prop-types';

MoviePage.propTypes = {
   movie: PropTypes.object.isRequired,
};

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