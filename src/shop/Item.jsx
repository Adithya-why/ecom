export default function Item({name , price}){





    return(
        <div className="item bg-white text-gray-400">
            <div>
                {name}
            </div>

            <div>
                {price}
            </div>

            <div>
                <input type="text" defaultValue={1} />
                <button>Add to cart</button>

            </div>
        </div>
    )
}
    


   