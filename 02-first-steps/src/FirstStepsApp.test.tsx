import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepApp } from "./FirstStepsApp";



const mockItemCounter = vi.fn( (_props:unknown)=>{

    return( 
    <div data-testid= 'ItemCounter'/> );
});

vi.mock('./shooping-cart/ItemCounter',() =>({
    ItemCounter:(props:unknown)=> mockItemCounter(props),
}));


// vi.mock('./shooping-cart/ItemCounter',()=>({
//     ItemCounter: (props: unknown)=> 
//     <div data-testid= 'ItemCounter' 
//     name = {props.name} 
//     quantity = {props.quantity}/>,
// }));

describe('FirstStepsApp',()=>{

    afterEach(()=>{
        vi.clearAllMocks();
    })

    test('should match snapshot',()=>{
        const{container} = render(<FirstStepApp />)
        expect(container).toMatchSnapshot();
    });
    test('should render the correct number of itemCounter componets',()=>{
        
        render(<FirstStepApp/>);

        const itemCounters = screen.getAllByTestId('ItemCounter');
        
        expect(itemCounters.length).toBe(3);


    });
    test('should render itemCounter with correct props',()=>{
        render(<FirstStepApp/>)

            expect(mockItemCounter).toHaveBeenCalledTimes(3);
            expect(mockItemCounter).toHaveBeenCalledWith(
                {name : "Nintendo Switch", 
                quantity: 2},
            );
            expect(mockItemCounter).toHaveBeenCalledWith(
                {name : "Pro controller", 
                quantity: 3},
            );
            expect(mockItemCounter).toHaveBeenCalledWith(
                {name : "Super Smash Bros", 
                quantity: 5},
            );







    });
});