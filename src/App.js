import { Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ShowWordDetails from "./Components/ShowWordDetails/ShowWordDetails";

function App() {

  return (

    <div>
      <Route path="/" exact component={Home}/>
      <Route path="/word/:theWord" exact component={ShowWordDetails} />
    </div>

  );
}

export default App;
