import { fireEvent, render,screen} from "@testing-library/react";
import { describe,expect,test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter',()=>{

    test('should render with default values',()=>{
        
        const name = 'test Iteam' // preparando el sujeto de prueba.

        render(<ItemCounter name = {name}/> )
        
        expect(screen.getByText(name)).toBeDefined(); //el tobeDefined() es usado para saber si existe.
        expect(screen.getByText(name)).not.toBeNull(); //el tobeNull() es usado para saber si es nulo, el not es para que no sea nulo.
    });

    test('shuold render with custom quantity',()=>{
        const name = 'Pro Controller';
        const quantity = 10;

        render(<ItemCounter name = {name} quantity={quantity}/>);

        expect(screen.getByText(quantity)).toBeDefined();
    });

    test('should increse count when +1 button is pressed',()=>{

        render(<ItemCounter name = {'test item'} quantity={1} />);
    
        const [buttonAdd] = screen.getAllByRole('button');
        
        fireEvent.click(buttonAdd);

        expect(screen.getAllByText('2')).toBeDefined();
        
    });

    test('should decrease count when -1 button is pressed',()=>{
        //quantity = 5
        render(<ItemCounter name = {'item counter'} quantity={5} />);

        const [, buttonDecrase] = screen.getAllByRole('button');
        
        fireEvent.click(buttonDecrase);

        
        expect(screen.getAllByText('4')).toBeDefined();
    });

    test('should not decrease count when -1 button is pressed and quantity is 1', ()=>{
        render(<ItemCounter name = {'ItemCounter'} quantity={1}/>)

        const [,buttonDecrase] = screen.getAllByRole('button');

        fireEvent.click(buttonDecrase);

        expect(screen.findAllByText(1)).toBeDefined();
    });
    test('should change to red when count is 1', ()=>{
        const quantity = 1
        const name = 'test item'
        render(<ItemCounter name = {name} quantity={quantity}/>)
        
        const  itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('red');
        
    });
    test('should change to black when count is greater than 1', ()=>{
        const quantity = 2
        const name = 'test item'
        render(<ItemCounter name = {name} quantity={quantity}/>)
        
        const  itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('black');
        
    });
});