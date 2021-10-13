import React from 'react'
import { Card, CardMedia, CardContent, Typography} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const PokeCard = ({ name, classes, img, pagina='' }) =>{
    // le pasamos los props desestructurados
    return(
        // vamos a utilizar el componente Card de MaterialUI (ver documentación, buscar en Google Card MaterialUI)

        <Card className={classes.item}>
            <CardMedia className={classes.media} image={img}/>
            <CardContent>
                <Link to={pagina}><Typography component="p" variant="h6">{name}</Typography></Link>
            </CardContent>
        </Card>
    )
}

export default withStyles({
    item:{
        minWidth: '350px',
        maxWidth: '450px',
        textAlign:'center',
        margin: '2em',
        boxSizing:'border-box'
    },

    media:{
        height: '20em',
        // maxHeight: '550px'
    }

}) (PokeCard)