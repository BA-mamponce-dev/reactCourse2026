interface Person{
    firstName: string;
    lastName: string;
    age: number;
    address? : Address;
}

interface Address{
        postalcode : number;
        city : string
}

const ironMan: Person = {
    firstName : 'Tony',
    lastName : 'Stark',
    age : 45,
    address : {
        postalcode : 123,
        city: 'NewYork'
    }
}

const spiderman: Person = {
    firstName : 'Peter',
    lastName : 'Parker',
    age : 28
}




console.log(ironMan, spiderman);


// const spiderman = structuredClone(ironMan);

// spiderman.fisrtName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 35;
// spiderman.address.city = 'San Jose'

// console.log(ironMan,spiderman);
