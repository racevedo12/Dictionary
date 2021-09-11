import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./show-word-details.css";

const ShowWordDetails = ( {match} ) =>
{

    const [data, setData] = useState({});

    const getData = () =>
    {
        const word = match.params.theWord;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}` ;
        const axios = require('axios').default;

        axios.get(url)
        .then( res =>
        {
            setData(res.data[0]);
        });

    };

    useEffect( () =>
    {
        getData();
        // eslint-disable-next-line
    }, []);

    
    return (

        <div className="show-details-container">

            <Link to="/">Home</Link>

            <div className="show-word-header">
                <h1>Dictionary App</h1>
            </div>
            
            
        </div>
        
    );
};

export default ShowWordDetails;