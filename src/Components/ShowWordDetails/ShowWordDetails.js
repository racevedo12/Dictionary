import React from "react";
import { Link } from "react-router-dom";
import "./show-word-details.css";

const ShowWordDetails = ( {wordObjList} ) =>
{
    console.log(wordObjList)
    // const [data, setData] = useState([]);

    // useEffect( () =>
    // {
    //     getData();
    //     // eslint-disable-next-line
    // }, []);

    // const getData = () =>
    // {
    //     const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + match.params.theWord ;
    //     const axios = require('axios').default;

    //     axios.get(url)
    //     .then( res =>
    //     {
    //         setData(res.data[0]);
    //     });

    // };

    

    return (

        <div className="show-details-container">

            <Link to="/">Home</Link>

            <div className="show-word-header">

                <h1>Dictionary App</h1>
{/* 
                <h3>{data.word}</h3>
                <h3> {data.word} <span> ({data.phonetics[0].text}) </span> </h3>
                <audio src={data.phonetics[0].audio} controls={true} autoPlay={false}></audio> */}
            </div>

            
            
            
        </div>
        
    );
};

export default ShowWordDetails;