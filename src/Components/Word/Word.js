import React, {useState, useEffect} from "react";

const Word = ( {word} ) =>
{
    const [data, setData] = useState({});

    const getData = () =>
    {
        if(word.length >= 1)
        {
            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}` ;
            const axios = require('axios').default;

            axios.get(url)
            .then( res =>
            {
                setData(res.data);
            })
        }
        
    };

    useEffect( () =>
    {
        getData();
        // eslint-disable-next-line
    }, [])

    return (
        <h3>{data.word}</h3>
    );
};

export default Word;