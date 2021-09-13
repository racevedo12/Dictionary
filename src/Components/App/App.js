import { useState } from "react";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
import ShowWordDetails from "../ShowWordDetails/ShowWordDetails";

function App() {

  const [validWordList, setWordList] = useState([]);
  const [wordObjList, setWordObjList] = useState([]);
  const [invalidWordList, setInvalidWordList] = useState([]);

  return (

    <div>
      <Route 
        path="/" 
        exact 
        render= { () => 
          <Home 
            list = {validWordList} 
            setList = {setWordList}
            objList = {wordObjList}
            setObjList = {setWordObjList}
            invalidWordList = {invalidWordList}
            setInvalidWordList = {setInvalidWordList}
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
