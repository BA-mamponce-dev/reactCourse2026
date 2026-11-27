//  ! import type { Gif } from "../../mock-data/gifs.mock";
//? anteriormente de ahi provenian nuestros GIF

import type { Gif } from "./interfaces/gif.interface";



interface Props{
    gifs: Gif[];
}
    


export const GifList = ({gifs: gif}:Props) => {
    return (
        <div className="gifs-container"> 
                    {
                        gif.map((gif)=>(
                            <div key={gif.id} className="gif-card">
                                <img src={gif.url} alt={gif.title} />
                                <h3>{gif.title}</h3>
                                <p>
                                    {gif.width}x{gif.height}(1.5 MB)
                                </p>
                            </div>
                        ))
                    }
                </div>
        )
}
