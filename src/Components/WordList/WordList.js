import React from "react";
import Word from "../Word/Word";
import { Link } from "react-router-dom";

const WordList = ( {list, invalidWord, setInvalidWord, objList, setObjList, invalidWordList, setInvalidWordList} ) =>
{
    return (
        
        <div>

            <h2> Valid Words </h2>

            {/*
                Loop through the array of words
                Creates a word component for each word
                And creates a link for each component specifically 
             */}
            {list.map( (word, idx) =>
            {
                return (

                    <div key={idx}>

                        <h3>

                            <Link to={`/${word}`}>

                                <Word 
                                    word = {word} 
                                    invalidWord = {invalidWord} 
                                    setInvalidWord = {setInvalidWord}
                                    objList = {objList}
                                    setObjList = {setObjList}
                                    invalidWordList = {invalidWordList}
                                    setInvalidWordList = {setInvalidWordList}
                                /> 

                            </Link>

                        </h3>

                    </div>
                    
                );
                
            })}

        </div>
    );
};

export default WordList;