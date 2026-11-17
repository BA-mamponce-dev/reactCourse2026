import {describe, expect, test} from 'vitest';
import {add,subtract,multiply, divide} from './math.helper';


describe('add', ()=> {
    
    test('suma de numeros positivos', ()=>{
    
        // ! 1. Arrange
        const a = 1;
        const b = 2;
    
        //! 2. Act
        const result = add(a,b);
    
        console.log(result);
        //! 3. Assert
        expect(result).toBe(a +b);
    });
    test('suma de numeros negativos', ()=>{
    
        // ! 1. Arrange
        const a = -2;
        const b = -2;
    
        //! 2. Act
        const result = add(a,b);
    
        console.log(result);
        //! 3. Assert
        expect(result).toBe(a +b);
    });
});

describe('subtract',()=>{
    test('resta de dos numeros positivos',()=>{
        const num1 = 7;
        const num2 = 5;

        const result = subtract(num1,num2);
        console.log(result);
        
        expect(result).toBe(num1 - num2)
    });

    test('resta de dos numeros negativos', ()=>{
        const num1 = -2;
        const num2 = -4;

        const result = subtract(num1,num2);
        console.log(result);
        
        expect(result).toBe(num1-num2)
    })
});

describe('multiply',()=>{
    test('multiplicar numero por 0',()=>{
        const num1 = 5;
        const num2 = 0;

        const result = multiply(num1,num2);
        console.log('resultado multiply 1: ',result);
        
        expect(result).toBe(0);
    });

    test('multiplica dos numeros positivos',()=>{
        const num1 = 4;
        const num2 = 7;

        const result = multiply(num1,num2);
        console.log(`resultado multiply 2 :${num1} * ${num2}`, result);

        expect(result).toBe(num1 * num2);
        
    });
});


describe('divide',()=>{
    test('deberia de dividir dos numeros positivos',()=>{
        const num1 = 10;
        const num2 = 2;

        const result = divide(num1,num2);
        console.log(`resultado de division ${result}`);
        
        
        expect(result).toBe(num1/num2);
    });
});
