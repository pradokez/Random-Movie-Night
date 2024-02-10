import './App.css';
import axios from 'axios';
import  {useEffect } from "react";

function RandomizeOption(length){
  return Math.floor(Math.random() * length);
}

const randomStreaming = () => {
  const random = RandomizeOption(streamings.length);
  return streamings[random];
}

function randomPage(){
  // ? set value 81 as default necessary because the total pages available is only shown after request
  return RandomizeOption(81)
}

const RANDOM_PAGE = randomPage();
const streamings = ['netflix', 'prime', 'starz', 'hbo', 'disney'];


function Home() {

  useEffect(() => {
    const movieFetch = async () => {
      const options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/search/basic',
        params: {
          country: 'us',
          service: randomStreaming(),
          type: 'movie',
          page: RANDOM_PAGE,
          output_language: 'en',
        },
        headers: {
          'X-RapidAPI-Key': 'e3d485b5d9msh3e3a2f06d0f912ep111791jsnd7e62dbf62bb',
          'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        const movies = response.data.results
        const randomMovieIndex = RandomizeOption(response.data.results.length)
        console.log(movies[randomMovieIndex])
      } catch (error) {
        console.error(error);
      }
    }
    return () => {
      movieFetch();
    }
  }, [])

  return (
    <>
    <h1>random movie night</h1>
    <button onClick={()=>{}}>start</button>
    </>
  )
}

export default Home;
