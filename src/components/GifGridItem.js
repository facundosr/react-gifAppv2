import React from 'react'

// acá recibo una imagen
export const GifGridItem = ({id, title, url}) => { //recibo las props que me mandan desde gifgrid y las desestructuro

    return (
        <div className='card animate__animated animate__fadeInUp animate__delay-1s animate__faster'>
            <img src={url} alt={title} key={id}/>
            {/* <p>{title}</p> */}
            
        </div>
    )
}
