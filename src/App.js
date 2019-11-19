import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

function Biodata(props){
  return <span> Umur : {props.age}</span>
}

function Greeting(props){
  return <h1>Halo {props.name} - <Biodata age={props.age} /> </h1>
}

class App extends Component {
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Greeting name="Rina Pratama" age="24" />
          <Greeting name="Irwanto" age="27" />
        </header>
      </div>
    )
  }
}

export default App;