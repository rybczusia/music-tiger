import React from "react";
import logo from "./img/logo1.png";
import SpotifyWebApi from 'spotify-web-api-js';
import ReactPlayer from 'react-player'

const refreshTokenUrl = 'http://spotifyauth-env.f7ecrif2b6.eu-central-1.elasticbeanstalk.com/refresh_token';
// const refreshTokenUrl = 'http://localhost:8888/refresh_token';

const spotifyApi = new SpotifyWebApi();

class Game extends React.Component {

    constructor(props) {
        super(props);
        const token = localStorage.getItem('accessToken');
        console.log(token);
        if (token) {
            spotifyApi.setAccessToken(token);
        }
        this.state = {
            time: 60,
            titles: ['', '', '', ''],
            answer: null,
            answers: [],
            active: false,
            result: [],
            item: 0,
            playingTittle: 'coś',
            playingUrl: '',
            urls: ''
        };
    }


    getPlaylist() {
        let dataId = localStorage.getItem('dataId');
        this.refreshAccessToken()
            .then(result => {
                spotifyApi.setAccessToken(result.access_token);
                spotifyApi.getUserPlaylists('szynszylszlachetny')
                    .then((response) => {
                        console.log(response);
                        spotifyApi.getPlaylistTracks(dataId)
                            .then((response) => {
                                console.log(response);
                                console.log(typeof response);
                                console.log(response.items);
                                this.datamap(response.items);
                            })
                    })
            });
    }

    refreshAccessToken() {
        const refreshToken = localStorage.getItem('refreshToken');
        return fetch(`${refreshTokenUrl}?refresh_token=${refreshToken}`)
            .then(res => res.json());
    }

    datamap(data) {
        const dataName = [];
        const dataUrl = [];
        data.map((track, id) => {
            if (track.track.preview_url) {
                dataName.push(track.track.name);
                dataUrl.push(track.track.preview_url);
            }
        });
        console.log(dataName);
        console.log(dataUrl);
        let random = Math.floor(Math.random() * (dataName.length));
        this.setState({
            titles: dataName,
            urls: dataUrl,
            playingTittle: dataName[random],
            playingUrl: dataUrl[random]
        });
        console.log(this.state.playingTittle);
        console.log(this.state.playingUrl);
    }

    randomize = () => {
        let answers = [];
        let correctIndex = Math.floor(Math.random() * (this.state.titles.length));
        let correct = this.state.titles[correctIndex];
        console.log(correct);
        let correctUrl = this.state.urls[correctIndex];
        while (answers.length < 5) {
            let randomIndex = Math.floor(Math.random() * (this.state.titles.length));
            let tittle = this.state.titles[randomIndex];
            if (!answers.find((a) => a === tittle) && correct !== tittle) {
                answers.push(tittle)
            }
        }
        answers.push(correct);
        this.shuffle(answers);
        this.setState({
            answers: answers,
            playingTittle: correct,
            playingUrl: correctUrl
        });
        this.state.titles.splice(correctIndex, 1);
        this.state.urls.splice(correctIndex, 1);

    };

    shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        return a;
    }

    timer = () => {
        if (this.state.time > 0) {
            this.setState({
                time: this.state.time - 1
            });
        } else {
            this.setState({active: false});
            clearInterval(this.idInterval);
            this.handleResult();
        }
    };

    handleStart = (e) => {
        e.currentTarget.style.display = 'none';
        this.randomize();
        this.setState({active: true});
        this.idInterval = setInterval(() => this.timer(), 1000);
    };

    handleAnswer = (e) => {
        let result = this.state.result;
        e.preventDefault();
        this.randomize();
        if (e.currentTarget.innerText === this.state.playingTittle) {
            result.push([e.currentTarget.innerText])
        }
    };

    handleResult = () => {
        console.log('RESULT');
        console.log(this.state.result.length);
        localStorage.setItem('result', this.state.result.length);
        console.log(localStorage.result);
        window.location = "/results";
    };

    componentDidMount() {
        this.getPlaylist();
    }

    render() {
        const {active, playingUrl, time} = this.state;
        return (
            <div className="App">
                <div className="App-wrapper">
                    <header className="App-header">
                        {!active && <img src={logo} className="App-logo" alt="logo"/>}
                        {!active &&
                        <p className='App-description'>Upewnij się, że masz włączone głosniki, bo po naciśnięciu "Start"
                            usłyszysz muzykę.</p>}
                        {active && <p className='App-time'>{time}</p>}
                        {active && <p className='App-description'>Utwór, który słyszysz to....</p>}
                        <button className='App-button-start App-button' onClick={this.handleStart}>Start</button>

                            {
                                this.state.answers.map((el, index) =>
                                    (
                                        <button key={index} disabled={!active} onClick={this.handleAnswer}
                                                className='App-button-answers Button-row'>{el}</button>
                                    )
                                )
                            }
                    </header>
                </div>
                {active && <ReactPlayer url={playingUrl} playing/>}
            </div>

        )
    }
}

export default Game;
