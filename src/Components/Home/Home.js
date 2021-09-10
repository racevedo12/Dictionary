import React from "react";
import "./Home.css";
import Form from "../Form/Form";
import { useState } from "react";
import WordList from "../WordList/WordList";

const Home = () =>
{
    const [wordList, setWordList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) =>
    {
        e.preventDefault();
    };

    const handleInputChange = (e) =>
    {
        setInputValue(e.currentTarget.value);
    };

    return (

        <div className="container">

            <header className="header">
                <h1>Dictionary App</h1>
            </header>

            <main className="main-container">
                
                <Form
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                />

                <WordList list={wordList} />

            </main>
                
            

        </div>
        
    );
};

export default Home;