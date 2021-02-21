import React, { useEffect, useState } from 'react'
import { obtenerGift } from '../helpers/obtenerGifts';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { MarcoParaGifts } from './MarcoParaGifts';

export const GifColeccion = ( {categoria}) =>{
    
    const { data:images ,loading } = useFetchGifs (categoria);
    // const [images,setImages] = useState([]);
    //obtenerGift();  
    
    return (
        <>
        <h3> {categoria} </h3>
        {/* {loading ? 'Cargando' :'Data CArgada'} */}
        <div className= 'contenedor-de-cartas animate__animated animate__backInDown'>
            
                {loading && <p>Loading</p>}
                 { images.map( (img ) => { 
                    return (<MarcoParaGifts key={img.id} {...img}  />) } ) } 
            
        </div>
        </>
        
    )
}

// useEffect( () => {
//     //Codigo afectado
// }, [])
