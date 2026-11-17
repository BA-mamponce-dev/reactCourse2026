import { useState } from "react";
import { CustomHeader } from "./gifs/components/components/customHeader";
import { SearchBar } from "./gifs/components/components/SearchBar";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { getGifsByQuery } from "./gifs/components/actions/get-gifs-by-query.actions";
import type { Gif } from "./gifs/components/interfaces/gif.interface";

export const GifsApp = () =>{

    const [gifs, setGifs] = useState <Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    
    const handleTermClicked = (term:string)=>{
        console.log({term});
        
    }

    const handleSearch = async(query:string)=>{
        query = query.trim().toLocaleLowerCase();
        if(query.length === 0) return;

        if(previousTerms.includes(query)) return;
        setPreviousTerms([query, ... previousTerms].splice(0,7));

        const gifs = await getGifsByQuery(query);
        setGifs(gifs)
        
        
    }
    return(
    <>
     {/* Header */}
        <CustomHeader title="Buscador de Gifts"  description="Descubre y comparte el gif perfecto"/>
        {/* search */}
        <SearchBar placeholder="Busca lo que quiera" onQuery={handleSearch} />
        {/* busquedas previas */}
        <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} /> 
        {/* Gifs */}
        <GifList gifs={gifs}/>
    </>
    );
};