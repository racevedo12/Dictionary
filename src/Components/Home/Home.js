import React from "react";
import "./Home.css";
import Form from "../Form/Form";
import { useState, useEffect } from "react";
import WordList from "../WordList/WordList";

const Home = () =>
{
    const [wordList, setWordList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [word, setWord] = useState("");

    useEffect( () =>
    {
        let theWord = "";

        inputValue.split("").forEach( (char) =>
        {
            theWord += char;
        });

        setWord(theWord);

    }, [inputValue]);


    const addToList = () =>
    {
        const newWordArr = [];

            wordList.forEach( (item) =>
            {
                newWordArr.push(item);
            });

            newWordArr.push(word);

            setWordList(newWordArr);
            setWord("");
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        if(formSubmitted === true)
        {
            
            setFormSubmitted(false);
            e.currentTarget[0].value = "";
            
            addToList();
        }

        else
        {
            e.currentTarget[0].value = "";
            setFormSubmitted(true);

            addToList();
        }
        
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
                
                {/* {formSubmitted ? <Word word={word} /> : null} */}

            </main>
                
            

        </div>
        
    );
};

export default Home;