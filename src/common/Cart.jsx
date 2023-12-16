export default function Cart({ cart }){
    console.log(cart);
    let products = [];
    for(let i =0;i<cart.length;i++){
        products.push(<CartItem item={cart[i]}/>)
        
    }

    return(
        <div className="text-white">
            {products}

        </div>
    )
}


function CartItem(item){


    return(
        <div>
            <div>{item.name}</div>
            <div>{item.val}</div>
            <div>{item.price}</div>

            
        </div>
    )
}