import React from "react";
import "./Home.css";
import Form from "../Form/Form";
import { useState } from "react";

const Home = () =>
{
    const [wordList, setWordList] = useState([]);

    const handleSubmit = (e) =>
    {
        e.preventDefault();
    };

    return (

        <div className="container">

            <header className="header">
                <h1>Dictionary App</h1>
            </header>

            <main className="main-container">
                <Form handleSubmit={handleSubmit}/>
            </main>
                
            

        </div>
        
    );
};

export default Home;