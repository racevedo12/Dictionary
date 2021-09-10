import React from "react";
import "./Home.css";
import Form from "../Form/Form";
import { useState } from "react";
import WordList from "../WordList/WordList";

const Home = () =>
{
    const [wordList, setWordList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    // const [formSubmitted, setFormSubmitted] = useState(false);
    const [wordData, setWordData] = useState({});

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`;
        const axios = require('axios').default;

        axios.get(url)
        .then( res =>
        {
            setWordData(res.data[0]);
        })

        const newWordArr = [];

        wordList.forEach( (word) =>
        {
            newWordArr.push(word);
        });

        newWordArr.push(wordData);

        setWordList(newWordArr);
        e.currentTarget[0].value = "";
        console.log(wordData)

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

                <WordList list={wordList}/>
                

            </main>
                
            

        </div>
        
    );
};

export default Home;