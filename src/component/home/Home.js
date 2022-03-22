import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='header'>
            <h1>Welcome to my Website</h1>
            <a href="/Home">Home</a>
            <a href="/about">About</a>
            <a href="/Contact">Contact</a>
        </div>
    );
};

export default Home;