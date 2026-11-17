




function greet(name: string): string{
    return `El nombre es: ${name}`;
    
}

const greet2 =(name: string):string =>`Hola: ${name}`;




const message = greet('Goku');
const message2 = greet2('Veggeta');

console.log(message,message2);



interface User{
    uid : string,
    userName: string;
}

function getUser():User{

    return {
        uid: 'ABD-123',
        userName: 'El_Papi23'
    };
}
const user = getUser();

console.log(user);

const getUser2 =():User=>(
    {
        uid: 'ABD-123',
        userName: 'El_Papi23'
    });


console.log(getUser2());


const getUser3 = structuredClone(getUser());

console.log(getUser3);


const getUser4 = ()=>{
    
    return structuredClone(getUser())
};


console.log(getUser4());




const myNumber:number[] = [1,2,3,4,5,6];

// myNumber.forEach(function(value){
//     console.log({value});
    
// })

myNumber.forEach( (value)=>{ console.log({value});} )

