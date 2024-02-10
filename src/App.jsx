import './App.css';


function App() {

  async function start(){
    const options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/search/basic',
      params: {
        country: 'us',
        service: 'netflix, prime, disney, hbo, starz',
        type: 'movie',
        output_language: 'en',
        language: 'en'
      },
      headers: {
        'X-RapidAPI-Key': 'e3d485b5d9msh3e3a2f06d0f912ep111791jsnd7e62dbf62bb',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <h1>random movie night</h1>
    <button>start</button>
    </>
  )
}

export default App
