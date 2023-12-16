import { useEffect } from "react"
import Item from "./Item"
import { useState } from "react";


export default function Shop({ changeCart }){

    let [products,setprod] = useState([]);

    //runs on mount
    //gets details from api
    //updates state with the products details

    useEffect(
        ()=>{
            async function getprod(){

                let res = await fetch('https://fakestoreapi.com/products?limit=5');
                let items = await res.json();
                

                let updatedProducts = [];
            
                    for (let i = 0; i < 5; i++) {
                      let obj = {
                        name: items[i].title,
                        price: items[i].price,
                        image: items[i].image
                      };
            
                      updatedProducts.push(obj);
                    }

                setprod(updatedProducts);
    


            }


            getprod();
        },[]
    )


    //basically tracks the number of items as entered
    //runs on change of input


        let [prodnums,updateProdnums] = useState({});

        function changeProdnums(e,name){
            let val = e.target.value;
            
            updateProdnums({...prodnums,[name]:val});

        }
    

    //function to add items to cart
    //calls changeCart

    function shopChangeCart(name,price){
        let itemno = prodnums[name];

        //i dont know why this fixes the error
        //where val is undefined if it is one
        if(itemno==undefined){
            itemno=1;
        }
        changeCart(name,itemno,price);



    }

    
    
    let grid=[];
    for(let i =0;i<5;i++){
        if(products[i]){
        grid.push(<Item name={products[i].name} price={products[i].price} image={products[i].image} key={i} changeProdnums={changeProdnums} 
        shopChangeCart={shopChangeCart}
        />)
        }
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