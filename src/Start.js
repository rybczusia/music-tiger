import logo from "./img/logo1.png";
import React from "react";

const Start = () => {

    const handleClick = (e) => {
        window.location = "/game";
        console.log(e.currentTarget.getAttribute('data-id'));
        localStorage.setItem('dataId', e.currentTarget.getAttribute('data-id'));
        console.log(localStorage.dataId);
    };
    return (
        <div className="App">
             <div className="App-wrapper">
            <header className="App-header">
                <img src={logo} className="App-logo-category" alt="logo"/>
                <h1>Music Tiger</h1>
                <p className='App-tittle'>Wybierz kategorię</p>
                <button onClick={handleClick} className="App-button Button-row Category-button" data-id='2wqCDZpZCexmQDmAjccf6k'>Rockowe brzmienie</button>
                <button onClick={handleClick} className="App-button Button-row Category-button" data-id='3M5mNdm0FmAsXlA9O9MJIX'>Hity z radia</button>
                <button onClick={handleClick} className="App-button Button-row Category-button" data-id='5UgwmQyHk2elWdQ1mVTSh7'>Soundtrack</button>
                <button onClick={handleClick} className="App-button Button-row Category-button" data-id='74tRmciHLHyFQ4tt1f1gaX'>Jak z VOXFM</button>
                <button onClick={handleClick} className="App-button Button-row Category-button" data-id='2Hy4kbDSaV7A2z5EaQOwwT'>Gimby nie znajo</button>
                <button onClick={handleClick} className="App-button Button-row Category-button" data-id='4zEXxoWprwJAd918o5xKXp'>Dawno temu</button>
                <button onClick={handleClick} className="App-button Button-row Category-button" data-id='7jKW0tCPEnP0R300vV7HTf'>Jamaica dream</button>
                <button onClick={handleClick} className="App-button Button-row Category-button" data-id='32MqkXEIYuQ7rbzrdKsmX5'>I tak tego nie znacie</button>
                <button onClick={handleClick} className="App-button Button-row Category-button" data-id='05STzoEA3NWaRBaPdlbt4w'>Black stuff</button>
            </header>
             </div>
        </div>
    );
};

export default Start;
