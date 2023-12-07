export default function Item({name , price, image}){

console.log(image)



    return(
        <div className="item bg-slate-300 text-amber-950 rounded-lg m-2 flex flex-col items-center justify-evenly">
            <div>
                {name}
            </div>


            <img src={image} height={100} width={100} className="rounded-lg"/>

            <div>
                {price}
            </div>

            <div className="flex gap-4">
                <input className = "rounded-lg p-2" type="text" defaultValue={1} />
                <button className="bg-black text-white p-2 rounded-md">Add to cart</button>
                

            </div>
        </div>
    )
}
    


   