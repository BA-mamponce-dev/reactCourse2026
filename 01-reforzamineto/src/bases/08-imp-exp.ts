import { heroes,Hero,Owner } from "../data/heroes.data";

// const getHerobById = (id: number):Hero|undefined =>{
    
//     const hero = heroes.find( (hero)=>{

//         return hero.id === id;
//     });

//     // if(!hero){
//     //     throw new Error(`No se ha encontrado al heroe con el id ${id}`);
//     // };

//     return hero;
// };


export const getHeroesByOwner = (owner:Owner)=>{

    const heroesByOwner = heroes.filter( (hero) => hero.owner === owner);
    return heroesByOwner; 

}