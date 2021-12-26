import { Route } from "react-router-dom";

//HOC 
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./pages/Home.pages";
import Movie from "./pages/Movie.pages";


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
