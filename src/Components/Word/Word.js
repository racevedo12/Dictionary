import React, {useState, useEffect} from "react";

const Word = ( {word, invalidWord, setInvalidWord, objList, setObjList, invalidWordList, setInvalidWordList} ) =>
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

                const newObjList = [];

                objList.push(res.data[0]);

                objList.forEach( (wordObj) =>
                {
                    newObjList.push(wordObj);
                });

                setObjList(newObjList);
                           
            })

            .catch( (e) =>
            {
                console.clear();

                const newInvalidWordList = [];

                invalidWordList.push(word);

                invalidWordList.forEach( (theInvalidWord) =>
                {
                    newInvalidWordList.push(theInvalidWord);
                });

                invalidWord = word;
                setInvalidWord(invalidWord);
                setInvalidWordList(newInvalidWordList);

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