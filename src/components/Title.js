import React from 'react'

/*export default */
class Title extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.titulo}</h1>
                {/* Para acceder a los props(propiedades de los componentes) utilizamos la palabra reservada this */}
                <p>{this.props.description}</p>
                <a href={this.props.url}>Google</a>
            </div>
        );
    }
}

export default Title