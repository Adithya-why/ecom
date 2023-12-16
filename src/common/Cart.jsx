export default function Cart({ cart }){
   
    let products = [];
    for(let i =0;i<cart.length;i++){
        products.push(<CartItem item={cart[i]} key={i}/>)
        
    }
   

    return(
        <div className="text-white flex items-center justify-center flex-col gap-6">
            {products}

        </div>
    )
}


function CartItem(item){

    console.log(item)
    return(
        <div className=" bg-slate-700 w-2/4 h-24 cartitem ">
            <div>{item.item.name}</div>
            <div>{item.item.val}</div>
            <div>{item.item.price}</div>

            
        </div>
    )
}