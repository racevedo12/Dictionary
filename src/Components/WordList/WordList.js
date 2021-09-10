import React from "react";
// import Word from "../Word/Word";

const WordList = ( {list} ) =>
{
    return (
        <div>
            {/* <Word word={word}/> */}
            <h2> Word List </h2>
            {list.map( (item, idx) =>
            {
                return (
                    <div key={idx}>
                        <h3> {item.word} </h3>
                    </div>
                );
            })}
        </div>
    );
};

export default WordList;