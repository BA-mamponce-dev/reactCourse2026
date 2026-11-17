

const characterNames = ['Goku','Vegeta','Trunks'];

const [,,p3] = characterNames;

console.log({p3})


const returnArrayFn = ()=>{

    return ['ABC',123] as const;
}


const [letters, numbers] = returnArrayFn();

console.log(letters,numbers + 100);


// const WorkName = ['Goku','Vegeta'];



// const useState = (name)=>{
//     console.log(name);
    
// }

// console.log(name);
// setName();

