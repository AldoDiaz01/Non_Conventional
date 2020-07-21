import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import MiComponent from './components/MiComponent'


function HolaMundo(NOMBRE, EDAD) {
    var pres = (
    <div>
        <h2> Hola soy {NOMBRE}</h2>
        <h3> Tengo {EDAD} años</h3>
    </div>
    );
    return pres;
}
function App() {

    var NOMBRE = "Aldo Diaz";
    
    return (
    <div className="App">
        <header className="App-header">
            <img src={logo}
                className="App-logo"
                alt="logo"/>
            <p>
               
                Curso Básico de React
            </p>
            {HolaMundo(NOMBRE, 21)}
            <section className="components">
                <MiComponent/>
            </section>
        </header> 
    </div>
    );
}

export default App;