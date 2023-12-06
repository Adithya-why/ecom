import Item from "./Item"


export default function Shop({ handleclick }){



    return(
        <div className=" bg-black h-full text-gray-400 flex flex-col">
            <h1 className="text-4xl text-center font-bold mt-3 ">Shop</h1>

            <div className="itemsgrid mt-6">
                <Item name={'Computer'} price={'R$10000'}/>
                <Item name={'Computer'} price={'R$10000'}/>
                <Item name={'Computer'} price={'R$10000'}/>
                <Item name={'Computer'} price={'R$10000'}/>
            </div>


        </div>
    )
}