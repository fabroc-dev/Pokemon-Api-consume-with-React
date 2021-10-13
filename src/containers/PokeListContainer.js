import React from 'react'
import axios from 'axios';
// importamos axios, que lo instalamos desde la terminal, revisar cómo lo instalamos
import List from '../components/List';
import AppNav from '../components/AppNav'
import Pagination from './Pagination';


class PokeListContainer extends React.Component {

    state={
        Datapoke:[],
        // creamos un estado y un componente de éste que será un array vacío
        currentOffset: 0,
        pageCounter:1,
    }

    componentDidMount() {
        // ciclo de vida de un componente, se va a ejecutar sólo una vez, cuando el componente fue montado ya se ejecuta el código que nosotros coloquemos aquí adentro

        this.fetchData()
    }


    componentDidUpdate(prevProps, prevState ){
        // es otro método del ciclo de vida de un componente de react, recibe varios parámetros, como prevProps y también el prevState, haciendo referencia a un historial, hay que poner los dos parámetros para que no haya un ciclo de vida infinito
        
        const { currentOffset } = this.state

        if(currentOffset !== prevState.currentOffset){

            if(currentOffset<0){

                this.setState({
                    currentOffset: 0,
                    pageCounter:1,
                    // cuando el offset esté en 0 el counter estará en 1
                })

                this.fetchData(prevState.currentOffset)
            }
            this.fetchData(currentOffset)
        }
    }


    fetchData = (off_set = 0) => {
        // parámetro por defecto que valga 0 en caso de que no le pasemos nada, como en componentDidMount y componentDidUpdate
        let url = `${process.env.REACT_APP_POKE_API_BASE_URL}pokemon`
        let params = {
            offset: off_set,
            limit: 20
        }


        axios.get(url, ({ params }))
            // hacemos petición con axios
            .then(res => {
                // console.table(res.data.results)
                // en caso de éxito

                const{ results } = res.data

                this.setState({
                    Datapoke: results,
                    // configuramos el estado para que los datos obtenidos en la petición estén en los del componente del estado

                })
            })
            .catch(err => {
                console.log(err)
                // en caso de error, imprime el error
            })

    }


    increment = () => {
        const { currentOffset, pageCounter } = this.state

        this.setState({
            currentOffset: currentOffset+20,
            pageCounter: pageCounter+1,
        })

    }

    decrement = () => {
        const { currentOffset, pageCounter } = this.state
        
        this.setState({
            currentOffset: currentOffset-20,
            pageCounter: pageCounter-1,
        })
    }



    render() {

        const { Datapoke, pageCounter} = this.state;
        // hacemos destructuración de los datos que pusimos en el estado(state) de más arriba
    
        // console.log(currentOffset)

        return (

            <React.Fragment>    
                <AppNav/>
                <Pagination 
                    increment={this.increment}
                    decrement={this.decrement}
                    page={pageCounter}
                />
                <List datospoke={Datapoke} / >
            </React.Fragment>
        
        )
    }
}

export default PokeListContainer