import { Button } from '@material-ui/core'
import React from 'react'
import '../styles/Pagination.css'

const Pagination = (props) => {

    const { increment, decrement, page } = props

    return(
        <div className="pagination_container">
            <Button variant="outlined" color="secondary" onClick={decrement}>Anterior</Button>

            <Button variant="contained" color="secondary">{page}</Button>

            <Button variant="outlined" color="secondary" onClick={increment}>Siguiente</Button>
        </div>
    )
}

export default Pagination