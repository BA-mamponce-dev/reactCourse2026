import { CustomHeader } from "./gifs/components/components/customHeader";
import { SearchBar } from "./gifs/components/components/SearchBar";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () =>{

  const {gifs,previousTerms,handleTermClicked,handleSearch} = useGifs()
    return(
    <>
     {/* Header */}
        <CustomHeader title="Buscador de Gifts"  description="Descubre y comparte el gif perfecto"/>
        {/* search */}
        <SearchBar placeholder="Busca lo que quiera"  onQuery={handleSearch}/>
        {/* busquedas previas */}
        <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} /> 
        {/* Gifs */}
        <GifList gifs={gifs}/>
    </>
    );
};