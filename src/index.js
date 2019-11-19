import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//2. selain nilai bisa kita juga bisa mereturn function di dalam JSX React
const name = "Irwanto Wibowo";
function greet(){
	return "Hallo " + name
}
const element = <h1> {greet(name)} </h1>;
ReactDOM.render(element, document.getElementById('master'));

//1. contoh program yang mengembalikan nilai biasa
const salam = "Selamat Pagi"
const sapaan = <h2>{salam}</h2>
ReactDOM.render(sapaan, document.getElementById('sapa'))

serviceWorker.unregister();
