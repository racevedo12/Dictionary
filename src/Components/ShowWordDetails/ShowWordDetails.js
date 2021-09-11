import React from "react";
import { Link } from "react-router-dom";
import "./show-word-details.css";

const ShowWordDetails = () =>
{

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