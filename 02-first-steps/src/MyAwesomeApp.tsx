import type { CSSProperties } from "react";

const firstName = 'Moises';
const LastName = 'Muñoz';
const myFavoriteGames = ['Fifa', 'Smash','Spiderman'];
const isActive = true;
const myAddress = {
    country: 'Honduras',
    city : 'Tegucigalpa'
}
const MyStyle: CSSProperties = {
                backgroundColor: isActive ?'red' : 'blue',
                borderRadius : 10,
                padding: 10,
                textAlign: 'center'
                }


export const MyAwesomeApp= ()=>{
    

    return (
        <div>
            <div data-testid = "div-app">
                <h1 data-testid = "first-name-title" >{firstName}</h1>
                <h3>{LastName}</h3>
                <p className="mi-clase-favorita" >{myFavoriteGames.join(', ')}</p>
                <h1>{isActive ? 'Activo' : 'Desactivado'}</h1>
                <p
                    style ={MyStyle}
                    >
                    {JSON.stringify(myAddress)}</p>
            </div>
        
        </div>
        
    );
    
}
