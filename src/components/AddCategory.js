import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

//ESTILOS
const useStyles = makeStyles(()=>({
    root:{
        backgroundImage: 'linear-gradient( 135deg, #3C8CE7 10%, #00EAFF 100%)',
        padding: '10px',
        borderRadius: '5px',
        width: '25%'
       
    },

}))


//COMPONENTE BARRA DE BUSQUEDA
//importo como prop a setCategories en el argumento
export const AddCategory = ({setCategories}) => {
    
    const classes = useStyles();

    //lo que ingresa la persona se guarda en inputvalue
    const [inputValue, setInputValue] = useState('') // si está importado ya hago la desestructuración y saco el react

   //e es evento de entrada, lo que voy escribiendo por consola lo pasa por la funcion
    const handleInputChange = (e) => { 
        setInputValue(e.target.value); 
            
    };

    //evento al apretar enter
    const handleSubmit = (e) => { 
        //previene que no se actualice la pagina al apretar enter
        e.preventDefault();         
        //if para chequear que no tenga entradas sin texto
        if (inputValue.trim().length >= 1) {    
            //al apretar enter llamamos al setCategories y lo guardamos dentro de categories
            setCategories( cat => [inputValue, ...cat]); //uso el callback cat para guardar en categories sin tener que importarla como prop
            setInputValue(''); //pone en blanco la barra de busqueda
        }    
    };    

    return (
        <div className={classes.root}>

            {/* //mando el primer arg del onsubmit al handleSubmit, y eso es lo que atrapa esa funcion   */}
            <form onSubmit={ handleSubmit }> 
                <input
                type='text'
                value={ inputValue } //lo que ingresa se va al inputValue
                //  funcion onchange significa que cuando se produce un cambio, muestra el elemento e en consola
                onChange={handleInputChange}
                />
            </form>
            
        </div>
    )
};


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,


};