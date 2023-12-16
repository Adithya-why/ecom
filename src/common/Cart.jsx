export default function Cart({ cart }){
   
    let products = [];
    for(let i =0;i<cart.length;i++){
        products.push(<CartItem item={cart[i]} key={i}/>)
        
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
        </div>
    )
}


function CartItem(item){

    console.log(item)
    return(
        <div className=" bg-slate-700 w-2/4 h-24 cartitem ">
            <div>{item.item.name}</div>
            <div>{item.item.val}</div>
            <div>{item.item.price*item.item.val}</div>

            
        </div>
    )
}