import { describe, expect, test } from "vitest";
import {render, screen} from "@testing-library/react"
import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp',()=>{
    test('Should render fisrtName and lastName',()=>{
        const {container}= render(<MyAwesomeApp/>) 
        // El container es bueno para evaluar estados iniciales
        // screen.debug();
        
        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');
        
        expect(h1?.innerHTML).contain('Moises')
        expect(h3?.innerHTML).contain('Muñoz');
        
        
    });
    test('Should render fisrtName and lastName -screen',()=>{
        render(<MyAwesomeApp/>) 
        // El container es bueno para evaluar estados iniciales
        screen.debug();
        
        // const h1 = screen.getByRole('heading',{
        //     level: 1
        // });
        const h1 = screen.getByTestId('first-name-title')
        console.log(h1.innerHTML);
        expect(h1.innerHTML).toContain('Moises');
    });
    test('should match snapshot', ()=>{
        const {container} = render(<MyAwesomeApp/>);
        expect(container).toMatchSnapshot();
    });
    test('should match snapshot', ()=>{
        render(<MyAwesomeApp/>);
        expect(screen.getByTestId("div-app")).toMatchSnapshot();
    });
});