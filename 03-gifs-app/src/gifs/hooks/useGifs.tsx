import { useRef, useState } from "react";
import { getGifsByQuery } from "../components/actions/get-gifs-by-query.actions";
import type { Gif } from "../components/interfaces/gif.interface";

//TODOS: gifsCache= objeto literal para almacenar los datos en cache.
//? Record define la estructrura del objeto 
//? String se refiere a las propiedades del objeto seran cadenas de texto.
// ? Cada propiedad tendra como valor un arreglo de Gif
// ? const gifsCache:Record <string, Gif[]> ={};
//?Existe otra opcion que se puede usar sin perder el valor por los renders UseRef

export const useGifs = () => {


    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifs, setGifs] = useState <Gif[]>([]);

    const gifsCache = useRef<Record<string,Gif[]>>({})


    const handleTermClicked = async(term:string)=>{
        //* si ya se consulto anteriormente el gif no lo volvemos a consultar
        if ( gifsCache.current[term]){
                setGifs(gifsCache.current[term])
            return;
        }
        //* Si la consulta es nueva  consultamos la API getGifsByQuery
        const gifs = await getGifsByQuery(term);
        setGifs(gifs)
    }


    const handleSearch = async(query:string)=>{
        //*Convierte el Query a Minuscula
        query = query.trim().toLocaleLowerCase();

        //!Si el Query esta vacio se retorna
        if(query.length === 0) return;
        
        //!Si lo que se esta buscando en query, ya no lo agrega a previousTerm
        if(previousTerms.includes(query)) return;

        setPreviousTerms([query, ... previousTerms].splice(0,7));

        const gifs = await getGifsByQuery(query);
        setGifs(gifs);

        //* al buscar un gif posteriomente lo guardamos en cache para nuestro HandleTermClicked.
        gifsCache.current[query] = gifs;
        
    }

  return {
      // ?VALUE
      gifs,
      previousTerms,
       //? Methods / Actions
      handleTermClicked,
      handleSearch
  }
}
