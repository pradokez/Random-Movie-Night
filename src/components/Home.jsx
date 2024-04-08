import PropTypes from 'prop-types';
const Home = ({handleClick}) => {
    return (
    <div className="wrapper">
      <h1 className="title"><span className="first-line">random</span><span className="second-line">movie night</span></h1>
      <button onClick={handleClick}>start</button>
      <div className="ellipse"/>
    </div>
    )
}

Home.propTypes = {
  handleClick: PropTypes.func,
}

export default Home;