/* eslint-disable react/prop-types */
const Home = ({handleClick}) => {
    return (
    <div>
      <h1>random movie night</h1>
      <button onClick={handleClick}>start</button>
    </div>
    )
}

export default Home;