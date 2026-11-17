const myPromise = new Promise <number>( (resolve, reject)=>{
    setTimeout( ()=>{
        resolve(100);
    },5000 )

    // reject('Mi amigo se perdio')
} );


myPromise.then( (myMoney)=>{
    console.log( `M pagaron los ${myMoney}` );
    
} )
.catch( (reason)=>{
    console.log(reason);
    
} )
.finally( ()=>{
console.log('a seguir con mi vida');

} );