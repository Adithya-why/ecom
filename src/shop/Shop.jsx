export default function Shop({ handleclick }){



    return(
        <div>
            <div>You are in Shop</div>
            <button onClick={handleclick} className=" bg-slate-500 outline-2">Add to Cart</button>
        </div>
    )
}