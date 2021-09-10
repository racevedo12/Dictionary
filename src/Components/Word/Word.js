import React, {useState, useEffect} from "react";

const Word = ( ) =>
{
    const [data, setData] = useState({});

    const getData = () =>
    {
        const url = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";
        const axios = require('axios').default;

        axios.get(url)
        .then( res =>
        {
            setData(res.data);
        })
    };

    useEffect( () =>
    {
        getData();
        // eslint-disable-next-line
    }, [])

    console.log(data);

    return (
        <h3>Word</h3>
    );
};

export default Word;