import {useState, useEffect} from 'react'
import { getFetchGifs } from '../helpers/getFetchGifs';

//los custom hooks funcionan como functional components
// 2) este hook hace el trabajo más pesado
export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });    

    //3)uso useEffect que se dispara solo cuando cambia la category
    useEffect(() => {

        getFetchGifs(category) //4) hago la peticion http mediante el helper enviándole la category como parametro
            .then(imgs=>{ //5) tenemos las imagenes
                
                setState({ //6)cuando las tenemos llamamos al setState cambiando la informacion
                    data: imgs,
                    loading: false        
                })
                            
            })

    }, [category])

    

    return state;

   
        


}
