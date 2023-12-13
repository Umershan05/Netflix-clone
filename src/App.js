import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './requests';


function App() {
  return (
    <div >
      <Banner  fetchUrl={requests.fetchNetflixOriginals}/>
      
      <Row  isPoster={true} title="Netflix Orignals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending in india" fetchUrl={requests.fetchTrending}/>
      <Row title="Top rated Movies" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
