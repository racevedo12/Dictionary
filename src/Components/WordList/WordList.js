import React from "react";
import Word from "../Word/Word";
import { Link } from "react-router-dom";

const WordList = ( {list} ) =>
{
    return (
        
        <div>

            <h2> Word List </h2>
            {list.map( (item, idx) =>
            {
                return (
                    <Link key={idx} to={`/word/${item.word}`}> <Word word={item} /> </Link>
                );
                
            })}
        </div>
    );
};

export default WordList;