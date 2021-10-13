import React from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom'

const Home = () => {

     return(
        <div className="App">
            <header className="App-header">
                <h1>Poke App</h1>
                <img src={process.env.PUBLIC_URL + '/images/poke.png'} width="400" alt="pokeimagen"/>

                <Link to='/pokemons'>Ver pokemons</Link>
            </header>
        </div>
     )
    
}

export default Home;