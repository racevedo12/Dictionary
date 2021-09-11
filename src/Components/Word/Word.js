import React, {useState, useEffect} from "react";

const Word = ( {word, invalidWord, setInvalidWord} ) =>
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
                setData(res.data[0]);
            })
            .catch( (e) =>
            {
                console.clear();
                alert(`${word} is not a valid word`);
                invalidWord = word;
                setInvalidWord(invalidWord);
            });
        }
        
    };

    useEffect( () =>
    {
        getData();
        // eslint-disable-next-line
    }, [])

    return (

        <h3> {data.word} </h3>
        
    );
};

export default Word;