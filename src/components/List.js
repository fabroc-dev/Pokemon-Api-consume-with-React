import { Grid } from '@material-ui/core'
import React, {Fragment} from 'react'
import PokeCard from './PokeCard'


const List=({ datospoke })=>{
    return(
        <Fragment>
            <h1>Lista de Pokemons</h1>
            <Grid container justifhy="center">
                {datospoke.map((pokemon, index)=>{
                    let direccion = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
                    let pokeIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2]
                    // sacamos el índice de cada pokemon oara obtener la imagen de cada uno, utilizando el método split
                    console.log(pokeIndex)
                    
                    return <PokeCard 
                                key={index}
                                name={pokemon.name}
                                img={`${direccion}${pokeIndex}.png?raw=true`}
                                pagina={`/poke-info/${pokeIndex}/${pokemon.name}`}
                            />
                    // le pasamos como props al componente el nombre de cada pokemon y la imagen mediante su dirección url, lo que añadimos en este template string es para que se visualiza, es la imagen completa del repositorio
                })}
            </Grid>
        </Fragment>
    )
}

export default List