import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategorias} ) =>{
    
    const [inputValue, setInputValue ] = useState('')
    
    // Para poder actualizar el elemento que esta dentro del input 
    // se necesitara esta funcion para que actualize elcontenido 
    // del imput
    const cambioValorInput = (valor) =>{
        setInputValue( valor.target.value);
    }
    // Se realiza esta funcion para que el envio de info del input
    // no sea por default y lo hagamos como un cambio de estado 
    const envioInfo = (e)=> {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategorias( val => [inputValue,...val] );
            // Para limpiar el valor dentro de input
            setInputValue('');
        }
    
    }
    return (
        <form onSubmit= {envioInfo}>
            <h2> Añade Categoria </h2>
            <input
            type="text"
            value= {inputValue}
            onChange= { cambioValorInput }
            />
        </form>
    )
}
  

AddCategory.propTypes={
    setCategorias:PropTypes.func.isRequired
}