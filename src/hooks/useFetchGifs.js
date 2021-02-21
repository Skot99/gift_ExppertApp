import {useEffect, useState} from 'react'
import { obtenerGift } from '../helpers/obtenerGifts';


export const useFetchGifs = (categoria) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        obtenerGift(categoria)
        .then(imgs => {
            setTimeout( () => {
                setState({
                    data:imgs,
                    loading: false
                });
            },2500)
        })
    //Codigo afectado
    }, [ categoria ] )

    // setTimeout(() => {
    //     setState({
    //         data: [1,2,2,2],
    //         loading: false 
    //     })
    // }, 3000);
    return state
}