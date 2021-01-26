import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import {GifGridItem} from './GifGridItem'

//COMPONENTE
export const GifGrid = ({ category }) => {

    //
    const {data:images, loading} = useFetchGifs(category); //1) llamo a mi custom hook useFectGifs, voy para alla    

    return (
        <>
        <h4 className= 'animate__animated animate__flash animate__delay-1s animate__faster'> { category }</h4>
        <div className='card-grid'>
             
            {loading && <p className='animate__animated animate__fadeOutDown animate__delay-1s'> 'Loading'</p>}

            { //mapeo cada imagen de images y saco id y title, para pasar la jey y mostrar el title en la li
                images.map( (imagen) => ( //está desestructurado, adentro del cb sino iria images, y el resto sería images.id images.title
                    
                    //inserto el componente gifgriditem, cada elemento tiene que tener su unico id
                    <GifGridItem key={imagen.id} {...imagen}/> //le mando cada una de las propiedades de las imagen como una prop independiente para usarlo en el componente
                    ))
            }               

        </div>
        </>
    )
}

