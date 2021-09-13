import React, { useState, useEffect } from "react";
import "./Home.css";
import Form from "../Form/Form";
import WordList from "../WordList/WordList";

const Home = ( {list, setList, objList, setObjList} ) =>
{
    // States for the input of the form, to check if the form was submitted
    // for the word that was from the input value, and the invalid word that was typed in.
    const [inputValue, setInputValue] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [word, setWord] = useState("");
    const [invalidWord, setInvalidWord] = useState("");
    const [invalidWordList, setInvalidWordList] = useState([]);

    // Everytime the user types in something, save that into the word state
    useEffect( () =>
    {
        let theWord = "";

        // This is to copy each character of that string and convert it into a word
        // Instead of just passing a copy of the address of the inputValue state
        inputValue.split("").forEach( (char) =>
        {
            theWord += char;
        });

        setWord(theWord);

    }, [inputValue]);

    // Everytime that you get an invalid word, check the list of words array
    // and ignore the invalid word. Set a new array with the valid words.
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

    // This is a helper function to use it into the handleSubmit function
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

    // This is another helper method to use it into the handleSubmit function
    const afterFormSubmit = (e) =>
    {
        if(formSubmitted === true)
        {
            
            setFormSubmitted(false);

            // Changes
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

    // Handles the Form Submit
    const handleSubmit = (e) =>
    {
        e.preventDefault();

        afterFormSubmit(e);
    };

    // Handles the value of the input from the form
    const handleInputChange = (e) =>
    {
        setInputValue(e.currentTarget.value);
    };

    return (

        <div className="container">

            <header className="home-header">
                <h1>Dictionary App</h1>
            </header>

            <main className="main-container">

                <Form
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                />

                <WordList 
                    list = {list} 
                    invalidWord = {invalidWord} 
                    setInvalidWord = {setInvalidWord}
                    objList = {objList}
                    setObjList = {setObjList}
                    invalidWordList = {invalidWordList}
                    setInvalidWordList = {setInvalidWordList}
                />

                <div className="invalid-words">

                    <h2> Invalid Words </h2>

                    {invalidWordList.map( (theInvalidWord, idx) =>
                    {
                        return(

                            <div key={idx}>
                                <h3 className="invalid-word"> {theInvalidWord} </h3>
                            </div>
                            
                        );
                    })}

                </div>

            </main>

        </div>
        
    );
};

export default Home;