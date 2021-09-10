import React from "react";
import "./form.css";

const Form = () =>
{
    return (

        <form className="form">
            <input id="word" placeholder="Type in the word that you want to look for"></input>
            <button id="search-button">Search</button>
        </form>
    );
};

export default Form;