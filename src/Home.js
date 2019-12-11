import logo from "./img/logo1.png";
import React from "react";


const Home = () => {

    const handleClick = ((e) => {
        if (e.currentTarget.innerText === 'Gram') {
            window.location = "http://spotifyauth-env.f7ecrif2b6.eu-central-1.elasticbeanstalk.com";
            // window.location = "http://localhost:8888";
        } else {
            window.location = "/spotify";
        }
    });

    return (
        <div className="App">
            <div className="App-wrapper">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>Music Tiger</h1>
                    <p className='App-tittle'>Jesteś muzycznym tygrysem?</p>
                    <p className='App-description'>Gra polega na rozpoznaniu jak największej ilości utworów w minutę</p>
                    <p className='App-description'> Wybierz kategorię i zacznij zgadywać!</p>
                    <button onClick={handleClick} className="App-button Button-row">Jestem nudziarzem</button>
                    <button onClick={handleClick} className="App-button Button-row">Gram</button>
                </header>
            </div>
        </div>
    );
};

export default Home