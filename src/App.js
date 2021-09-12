import { useState } from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ShowWordDetails from "./Components/ShowWordDetails/ShowWordDetails";

function App() {

  const [wordList, setWordList] = useState([]);
  const [wordObjList, setWordObjList] = useState([]);

  return (

    <div>
      <Route 
        path="/" 
        exact 
        render= { () => 
          <Home 
            list = {wordList} 
            setList = {setWordList}
            objList = {wordObjList}
            setObjList = {setWordObjList}
          /> } 
      />


      <Route 
        path="/:theWord" 
        exact
        render = { (props) => 
          <ShowWordDetails 
            wordObjList = {wordObjList}
            match = {props.match}
        /> }
      />

    </div>

  );
}

export default App;
