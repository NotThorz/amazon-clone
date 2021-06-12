import React from 'react';
import './Home.css';
import Products from './Products';
import Slides from './Slides';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <Slides />
            </div>
            <div >
                <Products/>
            </div>
        </div>
    )
}

export default Home
