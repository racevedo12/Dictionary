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

    return (

        <div className="show-details-container">

            <Link to="/">Home</Link>

            <header className="show-word-header">

                <h1 id="show-word-title">Dictionary App</h1>

                <div className="word-title-info">

                    <h3> {data.word} <span> ({data.phonetics[0].text}) </span> </h3>

                    {/* // Reference from MDN for audio element.
                    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio */}
                    <audio src={data.phonetics[0].audio} controls={true} autoPlay={false}></audio>
                      
                </div>

                
                {data.origin ?
                    <div className="word-origin">
                        <h3> Origin: <span id="word-origin-span"> {data.origin} </span> </h3>
                    </div>    
                : null}
                
            </header>

            <main className="main-container">

                {data.meanings.map( (meaning, idx) =>
                {
                    return (
                        <div className="word-details" key={idx}>

                            <h2> {data.word} <span> ({meaning.partOfSpeech}) </span> </h2>

                            <div className="word-attribute">
                                <h3> Definition: </h3>
                                <h4 className="word-definition"> {meaning.definitions[0].definition} </h4>
                            </div>

                            <div className="word-attribute">
                                <h3> Example: </h3>
                                <h4> {meaning.definitions[0].example} </h4>
                            </div>

                            {meaning.definitions[0].synonyms.length >= 1 ? 
                            
                                <div className="word-attribute">
                                    <h3> Synonyms: </h3>
                                    <h4 className="word-synonyms"> {meaning.definitions[0].synonyms.slice(0, 3) + ""} </h4>
                                </div>

                            :null}
                            
                            {meaning.definitions[0].antonyms.length >= 1 ? 
                            
                                <div className="word-attribute">
                                    <h3> Antonyms: </h3>
                                    <h4 className="word-antonyms"> {meaning.definitions[0].antonyms.slice(0, 3) + ""} </h4>
                                </div>

                            :null}

                        </div>
                    );
                    
                })}


            </main>
            
        </div>
        
    );
};

export default ShowWordDetails;