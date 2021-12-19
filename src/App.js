import { Route, Routes, BrowserRouter } from "react-router-dom";

//HOC 
import DefaultHOC from "./HOC/Default.HOC";

//Components
import Temp from "./components/temp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    {/* New version <Route path="/" element = {<Name/>} */}
    {/* <Route path="/" exact component = {Name} />
    <Route path="/movie" exact component = {Name2} /> */}
    <BrowserRouter>
    <Routes>
      <DefaultHOC path="/" exact component={Temp} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
