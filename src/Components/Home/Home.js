import React, { useState, useEffect } from "react";
import "./Home.css";
import Form from "../Form/Form";
import WordList from "../WordList/WordList";

const Home = ( {list, setList} ) =>
{
    const [inputValue, setInputValue] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [word, setWord] = useState("");
    const [invalidWord, setInvalidWord] = useState("");

    useEffect( () =>
    {
        let theWord = "";

        inputValue.split("").forEach( (char) =>
        {
            theWord += char;
        });

        setWord(theWord);

    }, [inputValue]);

    useEffect( () =>
    {
        const newArr = [];

        list.forEach( (word) =>
        {
            if(word !== invalidWord)
            {
                newArr.push(word);
            };
        });

        setList(newArr);
        setInvalidWord("");
        
        // eslint-disable-next-line
    },[invalidWord])

    const addToList = () =>
    {
        const newWordArr = [];

            list.forEach( (item) =>
            {
                newWordArr.push(item);
            });

            newWordArr.push(word);

            setList(newWordArr);
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

                <WordList list={list} invalidWord={invalidWord} setInvalidWord={setInvalidWord}/>

            </main>

        </div>
        
    );
};

export default Home;