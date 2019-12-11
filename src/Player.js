import React from 'react';
import './App.css';
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();





class Player extends React.Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('spotifyToken');
        if (token) {
            spotifyApi.setAccessToken(token);
        }

        this.state = {
            item: '',
            isPlaying: ''
        }
    }




    render() {
        return (
           <div>

           </div>
        )
    }
}


export default Player