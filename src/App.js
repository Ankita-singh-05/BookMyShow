import { Route } from "react-router-dom";

//HOC 
import DefaultHOC from "./HOC/Default.HOC";

//Components
import HomePage from "./pages/Home.pages"


function App() {
  return (
    <>
    {/* New version <Route path="/" element = {<Name/>} */}
    {/* <Route path="/" exact component = {Name} />
    <Route path="/movie" exact component = {Name2} /> */}
      <DefaultHOC path="/" exact component={HomePage} />
    </>
  );
}

export default App;
//temp.js -> defaultLayout -> DefaultHOC -> App.js -> Index.js
//inner -> outer
