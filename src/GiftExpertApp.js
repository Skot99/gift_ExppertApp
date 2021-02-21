import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddCategory } from './components/AddCategory';
import { GifColeccion } from './components/GifColeccion';

export const giftExpertApp = () =>{
    ReactDOM.render(
        <>
        <h2>Gift Expert App</h2>
        <hr></hr>
        </>,document.getElementById('root')
    );
}

export const GiftExpertApp = () => {
    
    //  const categorias = ['Atack on titans','Chivas','Dragon Ball'];
      const [categorias , setCategorias] = useState (['Rocket League']);
    //  const handleAdd = () =>{
    //     setCategorias([...categorias,'L'] );
    //  }
    return (
        <>
        <h1>Gift Expert App</h1>
        <AddCategory setCategorias={setCategorias} />

        <hr />

        {/* <button onClick= {handleAdd} >Agregar</button> */}

        <ol>   
            {
                // Para el Barrido del arreglo categorias en el HTML
                // se requiere del metodo .map para poder visualizarlo
                // o recorrerlo
                 categorias.map( (category) => (
                    <GifColeccion key={category} categoria={category} />
                    
                    // key={category}
                    // category={category} 
                    // />
                 )
                     
                    // <GifColeccion 
                    // // key={category}
                    // category={category} 
                    // />
                 
                 )  
            }
        </ol>
        </>
    )
}