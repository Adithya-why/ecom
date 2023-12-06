import { Link } from "react-router-dom"

export default function NavBar({ num }){




    return(
        <div className=" bg-slate-500 flex flex-row items-center justify-around h-[10vh] text-white font-sans ">

            <div className=" basis-1/2 text-xl">Totally Real Store Btw</div>
            
            <div>
                <ul className="flex gap-4">
                    <li className="hover:text-xl"><Link to={'/'}>Home</Link></li>
                    <li className="hover:text-xl"><Link to={'/shop'}>Shop</Link></li>
                </ul>
            </div>

            <div>
                <p>Cart [{num}]</p>
            </div>
            
        </div>
    )
    
}