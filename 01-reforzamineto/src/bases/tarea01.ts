
const useState = (valor1: string) =>{
    return [valor1, (valor2: string) =>{
        console.log(valor2); 
    }] as const
};

const [name,setName] = useState('Goku');

console.log(name);

setName('Vegetta');