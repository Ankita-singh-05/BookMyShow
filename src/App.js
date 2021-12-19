import { Route } from "react-router-dom";

//HOC 
import DefaultHOC from "./HOC/Default.HOC";

//Components
import Temp from "./components/temp";


function App() {
  return (
    <>
    {/* New version <Route path="/" element = {<Name/>} */}
    {/* <Route path="/" exact component = {Name} />
    <Route path="/movie" exact component = {Name2} /> */}
      <DefaultHOC path="/" exact component={Temp} />
    </>
  );
}

export default App;
