import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Example from './containers/Example'
import PokeListContainer from './containers/PokeListContainer'
import PokeInfoContainer from './containers/PokeInfoContainer'

const Routes =()=>{
    return(
        <Switch>
            <Route
                exact path='/' component={Home}
                /* exact es nuestro home, path la url y component es el componente que va a renderizar */
            />
            <Route exact path="/example" component={Example}/>
            <Route exact path="/pokemons" component={PokeListContainer}/>
            <Route exact path="/poke-info/:pokeIndex/:pokeName" component={PokeInfoContainer} />
            {/* le decimos que en la url al pulsar en cada pokemon aparezca el indice de cada uno y su nombre, las variables están en diferentes archivos, pokeIndex está en List que importa Card la cual es importada por pokeDescription y su vez por PokeInfoContainer que está importada aquí y pokeName está directamente en pokeInfoContainer */}
        </Switch>
    )
}

export default Routes