import React from "react";
import Word from "../Word/Word";
import { Link } from "react-router-dom";

const WordList = ( {list} ) =>
{
    return (
        
        <div>

            <h2> Word List </h2>
            {list.map( (word, idx) =>
            {
                return (

                    <div key={idx}>
                        <h3>
                            <Link to={`/word/${word}`}> 
                                <Word word={word}/> 
                            </Link>
                        </h3>
                    </div>
                    
                );
                
            })}
        </div>
    );
};

export default WordList;