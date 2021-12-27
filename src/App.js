import { Route } from "react-router-dom";
import axios from "axios";

//HOC 
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./pages/Home.pages";
import Movie from "./pages/Movie.pages";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;  //api_key is predefined in tmdb api request

function App() {
  return (
    <>
    {/* New version <Route path="/" element = {<Name/>} */}
    {/* <Route path="/" exact component = {Name} />
    <Route path="/movie" exact component = {Name2} /> */}
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
    </>
  );
}

export default App;
//temp.js -> defaultLayout -> DefaultHOC -> App.js -> Index.js
//inner -> outer
