    
    
    //necesito recibir categoria y hacer una peticion http
    //creo funcion 
    export const getFetchGifs = async (category) => {                             //encode reemplaza los espacios que podría haber en la category por %20 u otras cosas
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category) }&limit=10&api_key=r74zaGMNgyvhh5uR4YPyFrbZSWLwQh6N`
        const resp = await fetch( url );
        const {data} = await resp.json();  //data desestructurado

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url //el ? es por si no viene la carpeta imagen
            }
        });
    
       return gifs;
    };


