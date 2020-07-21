import React, {Component} from 'react';

class MiComponent extends Component{
    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamón'],
            calorias: 400
        };

        return (
            <div className="mi-comp">
                <h1>{'Receta: ' + receta.nombre}</h1>
                <h2>{'Calorias: ' + receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) =>  {
                            console.log(ingrediente);
                            return(
                                <li key={i}>
                                        {ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
                <hr/>
            </div>
        );
    }
}
export default MiComponent;