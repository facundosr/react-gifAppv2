import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import { GifGridItem } from './components/GifGridItem';


//COMPONENTE QUE RENDERIZA

//Estilos
const useStyles = makeStyles(() => ({
    root: {
        fontFamily: "Nunito",
    },
    titleH2:{
        backgroundImage: 'linear-gradient( 135deg, #3C8CE7 10%, #00EAFF 100%)',
        color: "#fff",
        padding: "15px",
        textAlign: "center",
        fontSize: '2rem',
        borderRadius: '5px',      

    },

}));

//componente

export const GifExpertApp = () => {
    const classes = useStyles();
    const [categories, setCategories] = useState(['']) //funcion para añadir categorias, con valor inicial = arreglo de 3 series

    return (
        <div className={classes.root}>

            <h2 className={classes.titleH2}>GifExpertApp</h2>
            {/* //le mando una prop al addcategories y la referencia a setCategories entre {} */}

            <AddCategory setCategories= {setCategories}/>           
            <hr/>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid category={category} key={category} />
                        
                    ))
                    
                }
            </ol>

        </div>
    )
};
