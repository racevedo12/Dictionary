import React from "react";
import "./form.css";

const Form = ( {handleSubmit} ) =>
{
    return (

        <form className="form" onSubmit={handleSubmit}>
            <input id="word" placeholder="Type in the word that you want to look for"></input>
            <button id="search-button">Search</button>
        </form>
    );
};

export default Form;