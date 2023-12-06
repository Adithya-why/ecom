import { Link } from 'react-router-dom'
import shopimg from '../assets/shopimg.jpg'


export default function Home(){




    return(
       
        <div className=" bg-slate-500 flex flex-col items-center mt-10 text-gray-200" >
            <h2 className="text-6xl mt-3">Totally real store <span className="italic text-xl">btw</span></h2>

            <h4 className="mt-3">Real products at Real prices</h4>

            <div className='text-xl mt-6 bg-orange-500 p-4 mb-6 rounded-lg'>
                <Link to={'/shop'}>Check out our products</Link>
            </div>

            <div>
                <img src={shopimg}/>
            </div>

            
        </div>
    )
}