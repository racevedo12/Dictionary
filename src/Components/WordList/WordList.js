import React from "react";
import Word from "../Word/Word";

const WordList = ( {list} ) =>
{
    return (
        <div>

            <h2> Word List </h2>
            {list.map( (item, idx) =>
            {
                return (
                    <Word key={idx} word={item} />
                );
                
            })}
        </div>
    );
};

export default WordList;