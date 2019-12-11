import React from 'react';
import './App.css';

const Spotify = () => {
    const getHashParams = () => {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q);
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }
        return hashParams;
    };

    const params = getHashParams();
    const accessToken = params.access_token;
    if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', params.refresh_token);
    }
    window.location = '/start';
};

export default Spotify;
