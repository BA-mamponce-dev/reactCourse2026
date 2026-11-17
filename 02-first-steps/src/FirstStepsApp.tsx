import { ItemCounter } from "./shooping-cart/ItemCounter";


interface itemInCard{
    productName: string,
    quantity: number
}


const itemsInCard: itemInCard[] = [
    {productName : "Nintendo Switch", quantity: 2},
    {productName : "Pro controller", quantity: 3},
    {productName : "Super Smash Bros", quantity: 5}
]

export const FirstStepApp=()=>{

    return(
        <>
            <h1>Carrito de compras</h1>
            {itemsInCard.map( ({productName,quantity})=>(
                <ItemCounter key={productName} name={productName} quantity={quantity}/>
            )
            )}
        </>
    );
}