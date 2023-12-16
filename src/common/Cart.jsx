export default function Cart({ cart }){
   //basically create a card for every element in cart
   //also calculates total
    let products = [];
    let total = 0;
    for(let i =0;i<cart.length;i++){
        products.push(<CartItem item={cart[i]} key={i}/>)
        total += cart[i].price*cart[i].val;
        
    }
   


    return(
        <div className="text-white">

            <div className="flex items-center justify-center mb-10 mt-5">
                <div className=" bg-slate-700 w-2/4 h-24 cartitem ">
                    <div>Name</div>
                    <div>Quantity</div>
                    <div>Price</div>
                
                </div>
            </div>

            <div className="text-white flex items-center justify-center flex-col gap-6">
                {products}
            </div>

            <div className="flex items-center justify-center mb-10 mt-5">
                <div className=" bg-slate-700 w-2/4 h-24 cartitem ">
                <div>Total</div>
                    <div></div>
                    
                    <div>{'$'+total}</div>
                
                </div>
            </div>

            <div className=" flex items-center justify-center">
                <button className=" bg-orange-500 p-4 rounded-md">Checkout and Pay</button>
            </div>

            
        </div>
    )
}


function CartItem(item){

    console.log(item)
    return(
        <div className=" bg-slate-700 w-2/4 h-24 cartitem ">
            <div>{item.item.name}</div>
            <div>{item.item.val}</div>
            <div>{'$'+parseInt(item.item.price*item.item.val)}</div>

            
        </div>
    )
}