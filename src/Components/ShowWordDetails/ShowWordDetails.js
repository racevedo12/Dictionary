import React from "react";
import { Link } from "react-router-dom";
import "./show-word-details.css";

const ShowWordDetails = ( {wordObjList, match} ) =>
{

    const getCorrectData = () =>
    {
        for (let wordObj of wordObjList)
        {   
            if (match.params.theWord === wordObj.word)
            {
                return wordObj;
            }
        };

    };

    const data = getCorrectData();

    console.log(data);

    return (

        <div className="show-details-container">

            <Link to="/">Home</Link>

            <div className="show-word-header">

                <h1 id="show-word-title">Dictionary App</h1>

                <div className="word-title-info">

                    <h3> {data.word} <span> ({data.phonetics[0].text}) </span> </h3>

                    {/* // Reference from MDN for audio element.
                    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio */}
                    <audio src={data.phonetics[0].audio} controls={true} autoPlay={false}></audio>
                    
                </div>     
                
            </div>

            
            
            
        </div>
        
    );
};

export default ShowWordDetails;