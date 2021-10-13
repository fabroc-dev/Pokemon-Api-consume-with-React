import { Paper, Grid, Typography } from '@material-ui/core'
import React from 'react'
import PokeCard from './PokeCard'
import {withStyles } from '@material-ui/core/styles'

const PokeDescription = ({ 
    pokeImage, 
    name, 
    description, 
    classes,
    height,
    weight,
    types }) => {


    return(
        
    <Grid container className={classes.centerContainer}>
        <Grid item md={6}>
            <PokeCard 
                img={pokeImage}
                name={name}
                // obtenemos la imagen y el nombre de PokeInfoContainer
            />
        </Grid>


        <Grid item md={6}>
            <div className={classes.descriptionContainer}>

                <Paper className={classes.descriptionBox}>
                    <Typography variant='body1' component='p' className={classes.descriptionText}>
                        {description}
                    </Typography>
                </Paper>

            </div>

            <div className={classes.descriptionContainer}>
            
                <Paper className={classes.descriptionBox}>
                    <Typography variant='body1' component='p' className={classes.descriptionText}>
                        Altura: {height/10} m
                    </Typography>


                    <Typography variant='body1' component='p' className={classes.descriptionText}>
                        Peso: {weight/10} kg
                    </Typography>


                    <span>Tipos:</span>

                    {types.map((item, index) => {
                        return(
                            <Typography key={index} variant='body1' component='p' className={classes.descriptionText}>
                                {item.type.name}
                            </Typography>
                        )
                    })}
                </Paper>

            </div>
        </Grid>
    </Grid>

    )
}


export default withStyles({
    centerContainer:{
        margin:'0 auto',
        width: '60% !important'
    },
    descriptionContainer:{
        margin:'2em',
    },
    descriptionBox:{
        padding:'2em',
        height:'auto',
    },
    descriptionText:{
        fontSize:'1em',
        textAlign:'justify',
        fontFamily:'Verdana'
    }
}) (PokeDescription)