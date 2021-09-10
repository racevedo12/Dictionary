import React, {useState, useEffect} from "react";

const Word = ( {word} ) =>
{
    const [data, setData] = useState({});

    const getData = () =>
    {
        const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
    };

    return (
        <h3>Word</h3>
    );
};

export default Word;