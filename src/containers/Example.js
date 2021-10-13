import React from 'react'
import '../styles/App.css'
// import logo from 'public\images\poke.png'
import Title from '../components/Title';

let intervalo, interval;

class Example extends React.Component{
    constructor(props){
        super(props);
        // Super -> habilita this dentro del constructor del componente
        // Super(props) -> habilita this.props dentro del constructor  del componente
    
        this.state ={
          counter:0,
          texto: 'play',
          texto2: 'Cuenta regresiva', 
          play:false
        }
        // el state representa el estado de nuestro componente, lo que va a guardar son datos actualizables, si vamos a requerir de datos que se estén actualizando, necesitamos asignarle un state a nuestro componente
      }
    
    
    
      playpause(){
    
        const contador=document.getElementById('contador')
        
        if(this.state.texto==="play"){
          intervalo= setInterval(()=>{
          this.setState((prevstate)=>{
            return{
              counter: prevstate.counter+1
            }
            // si queremos modificar o actualizar el estado de nuestro componente utilzamos setState, esto aumenta cada segundo el código
          })
        }, 1000)
    
    
        this.setState((prevstate)=> {
          return{
            texto: prevstate.texto='pause',
          }
        })
    
    
        contador.classList.add('play')
        contador.classList.replace('pause', 'play')
    
    
        } else if(this.state.texto==='pause'){
          clearInterval(intervalo)
          this.setState({
            texto:'play'
            // podemos hacerlo así también pero es recomendable la de arriba
          })
    
    
          contador.classList.replace('play','pause' )
    
        } 
    
        this.regresiva(false)
      }
    
    
    
      reiniciar(){
        this.setState((prevstate)=>{
          return{counter: prevstate.counter=0}
        })
      }
    
    
    
    
      regresiva(){
        
        const contador=document.getElementById('contador')
        
        if(this.state.texto2==="Cuenta regresiva"){
          interval= setInterval(()=>{
          this.setState((prevstate)=>{
          return{
            counter: prevstate.counter-1,
          }
        })
        }, 1000)
    
    
        this.setState((prevstate)=> {
          return{
            texto2: prevstate.texto2='stop',
          }
        })
    
        contador.classList.add('play')
        contador.classList.replace('pause', 'play')
    
    
        } else if(this.state.texto2==="stop"){
    
          clearInterval(interval)
          this.setState({
            texto2:'Cuenta regresiva',
          })
    
          contador.classList.replace('play','pause' )
    
        } 
       
      }
    
    
    
      render(){
        return (
        <div className="App">
          <header className="App-header">
            <img src={process.env.PUBLIC_URL + '/images/logo.svg'} className="App-logo" alt="logo" />  
    
            <Title
              titulo="Hola"
              description="Desarrollo de proyectos"
              url="https://www.google.com"
              /* le pasamos unas props a nuestro componente */
            />  
    
          </header>
    
          <h1 id="contador">{this.state.counter}</h1>
          {/* accedemos al estado de nuestro componente */}
          <button onClick={()=>this.playpause()}>{this.state.texto}</button>
          <button onClick={()=>this.reiniciar()}>Reiniciar</button>
          <button onClick={()=>this.regresiva()}>{this.state.texto2}</button>
    
        </div>
      );
      }
}

export default Example