import { Fragment } from "react";
import PropTypes from 'prop-types';

const MoviePage = ({movie}) => {
    const {posterURLs, streamingInfo, originalTitle, year, overview} = movie;
    const banner = posterURLs[342];
    const streamingInfoArray = Object.entries(streamingInfo);
    const streaming = streamingInfoArray[0][0];
    const movieUrl = streamingInfoArray[0][1].us.link;

    return (
        <Fragment>
        <div className="movie-info">
            <div className='movie-banner' style={{backgroundImage: `url(${banner})`,}}>
            <a href={movieUrl} target="_blank" rel="noopener noreferrer"><img src={`/src/assets/icon-${streaming}.svg`} style={{margin: '10px', zIndex: 3}}/></a>
            </div>
            <h1>{`${originalTitle} (${year})`}</h1>
            <p>{overview}</p>
        </div>
        <div className="semi-ellipse-top"/>
        <div className="semi-ellipse-bottom"/>
        </Fragment>
    )
}

MoviePage.propTypes = {
    movie: PropTypes.object,
    posterURLs: PropTypes.array,
    streamingInfo: PropTypes.object,
    originalTitle: PropTypes.string,
    year: PropTypes.string,
    overview: PropTypes.string,
}

export default MoviePage;