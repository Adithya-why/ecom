import { useEffect } from "react"
import Item from "./Item"
import { useState } from "react";


export default function Shop({ handleclick }){

    let [products,setprod] = useState([]);

    //runs on mount
    //gets details from api
    //updates state with the products details

    useEffect(
        ()=>{
            async function getprod(){

                let res = await fetch('https://fakestoreapi.com/products?limit=5');
                let items = await res.json();
               

                setprod(prevProducts => {
                    let updatedProducts = [];
            
                    for (let i = 0; i < 5; i++) {
                      let obj = {
                        name: items[i].title,
                        price: items[i].price
                      };
            
                      updatedProducts.push(obj);
                    }
            
                    return updatedProducts;
                  });
    


            }


            getprod();
        },[]
    )

        let grid = [];
        for(let i = 0;i<5;i++){
            grid.push(<Item name={products[i].name} price={products[i].price}/>)
        }

    return(
        <div className=" bg-black h-full text-gray-400 flex flex-col">
            <h1 className="text-4xl text-center font-bold mt-3 ">Shop</h1>

            <div className="itemsgrid mt-6">
                
                {grid}
                
            </div>


        </div>
    )
}