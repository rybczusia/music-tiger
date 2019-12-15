import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import './App.css';
import Game from "./Game";
import Results from "./Results";
import Start from "./Start";
import Home from "./Home";
import Spotify from "./Spotify";

class App extends React.Component {

    render() {
        return (
            <Router>
                <>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/start" component={Start}/>
                    <Route exact path="/game" component={Game}/>
                    <Route exact path="/results" component={Results}/>
                    <Route exact path="/spotify" component={Spotify}/>
                </>
            </Router>
        )
    }
}
export default App;
