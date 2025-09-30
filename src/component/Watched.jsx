import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Nav from "./Nav";

const Watched = () => {
    const {deleteWatchlist,allreadyWatched}=useContext(GlobalContext);
  return (
    <div>
      <Nav/>
        <div className='m-10'>
        <p className='text-[28px] font-medium '>Already Watched</p>
        <div>
         <ul className="grid grid-cols-6 mt-4">
          {
            allreadyWatched.length===0?(<p className=" text-red-600 mt-10 text-[20px] font-medium">Not listed any thing</p>):(allreadyWatched.map((item)=>{
              return(
                <li key={item.id}>
                  <img  className={`${ item.title?"h-[280px] w-[190px] ":"h-[280px] w-[190px]"} object-contain`} src={`https://image.tmdb.org/t/p/w1280/${item.poster_path}`} alt={item.id} />
                  <p className='text-[15px] mt-4 mb-1 font-medium truncate w-[190px]'>{item.title||item.name}</p>  
                  <div className='flex gap-2 items-end my-4'>
                    <button className='bg-green-800 w-[90px] p-1 rounded-md text-white '>Watched</button>
                  </div>
                </li>
              )
            }))
          }
         </ul>
        </div>
      </div>
    </div>
  )
}

export default Watched
