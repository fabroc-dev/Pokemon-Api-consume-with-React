import React from 'react'
import { AppBar, Toolbar, Typography} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';

// withStyles nos va a permitir sobreescribir o agregar nuestros propios estilos a MaterialUI

// MaterialUI es un componente de React para mejorar la interfaz de usuario, en este caso estamos usando el AppBar para hacer una barra de navegación, ver documentación: https://material-ui.com


const AppNav = (props) => {

    const { classes } = props;
        // extraemos los elementos del objeto de las props de WithStyle, estas props se van a llamar classes(obligatorio) ya que los elementos del objeto que pongamos ahí actuarán como clases de CSS por eso les asignamos el className en las etiquetas

        // dará lo mismo que poner en las props ({classes})


    return(
        <AppBar className={classes.NavColor} position="static">
        {/* le pasamos el nombre de la clase que le hayamos dado en el objeto WithStyles */}
        <Toolbar variant="dense">
            <Typography variant="h6" component="p"> <Link to="/" className={classes.enlace}>Poke App</Link> </Typography>
            {/* le decimos vas a ser una etiqueta p de html pero vas a lucir con un h6 */}
        </Toolbar>
    </AppBar>
    )
}

export default withStyles({
    NavColor:{
        backgroundColor: '#ef5350'
    },
    enlace:{
        color:'white',
        borderRadius:0,
        backgroundColor:'inherit',
        border:'none'
    }
    // de esta menera le pasamos estilos al MaterialUI, NavColor actuará como una clase
}) (AppNav)