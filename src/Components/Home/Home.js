import React from "react";
import "./Home.css";
import Form from "../Form/Form";

const Home = () =>
{
    return (

        <div className="container">

            <header className="header">
                <h1>Dictionary App</h1>
            </header>

            <main className="main-container">
                <Form />
            </main>
                
            

        </div>
        
    );
};

export default Home;