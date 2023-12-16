export default function Cart({ cart }){

   

    return(
        <div className="text-white">
            

        </div>
    )
}


function CartItem(item){


    return(
        <div>
            <div>{item.name}</div>
            <div>{item.price}</div>

            
        </div>
    )
}