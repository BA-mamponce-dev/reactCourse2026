import type { GiphyRandomResponse } from "../data/giphy.response";



const API_KEY = 'jOXumI3CrtB8CHbzFsxsPHjTlSyvNvHx';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);


const createImageInsideDOM =(url :string)=>{

    const imgElement = document.createElement('img');

    imgElement.src = url

    document.body.append(imgElement);

}

myRequest.then( ( response ) => response.json())
.then ( ( {data}: GiphyRandomResponse) => {

    const imgUrl = data.images.original.url;

    console.log(imgUrl);
    createImageInsideDOM(imgUrl);
    
    

} )
