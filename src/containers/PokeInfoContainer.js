import React from 'react'
import PokeDescription from '../components/PokeDescription';

// Imports Externos
import axios from 'axios'
import AppNav from '../components/AppNav';

class PokeInfoContainer extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            pokemonDescription: "",
            pokeName:"",
            pokeId:"",
            altura:"",
            peso:"",
            tipos:[],
        }
    }

    componentDidMount(){
        // petición con axios

        const { match } = this.props;
        /* 
            match y params son de la API, ver la rest API con postman
        */

        const pokeId=match.params.pokeIndex;
        const pokeName = match.params.pokeName
        const pokeDescriptionUrl = `${process.env.REACT_APP_POKE_API_BASE_URL}pokemon-species/${pokeId}/`
        // hacemos referencia a la url base que está en una variable de entorno en el archivo .env

        this.getPokeStats()

        axios.get(pokeDescriptionUrl)
            .then(res=>{
                const { flavor_text_entries } = res.data
                this.setState({
                    pokemonDescription: flavor_text_entries[11].flavor_text,
                    pokeName,
                    pokeId,
                    // en este caso lo mismo que poner pokeId=pokeId (sólo las ponemos una vez ya que llevan el mismo nombre)
                })
                console.log(this.state.pokemonDescription)
            })

    }


    getPokeStats = () => {
        const { match } = this.props;
        console.log(match)
        const pokeId=match.params.pokeIndex;

        axios.get(`${process.env.REACT_APP_POKE_API_BASE_URL}pokemon/${pokeId}/`)
            .then(res=>{
                // si imprimimos res, vamos a ver que en data, es decir lo que obtiene axios de la url aparecen todos los datos del pokemon, más abajo vamos a usar la altura, peso y tipo del pokemon
                const { height, weight, types } = res.data

                this.setState({
                    altura: height,
                    peso: weight,
                    tipos: types,
                })
            })
    }

    render(){

        // let direccion = `${process.env.REACT_APP_POKEMON_ART}`
        let direccion = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
        const { pokemonDescription, pokeName, pokeId, altura, peso, tipos } = this.state

        return(
            <React.Fragment>
                <AppNav/>
                <PokeDescription
                    name={pokeName}
                    pokeImage={`${direccion}${pokeId}.png?raw=true`}
                    /* con todo lo anterior le pasamos las props para que cuando en cada carta del pokemon aparezca el nombre de éste y la imagen que igual aparece en la página principal */
                    description={pokemonDescription}
                    height={altura}
                    weight={peso}
                    types={tipos}
                 />
            </React.Fragment>
        )
    }
}

export default PokeInfoContainer