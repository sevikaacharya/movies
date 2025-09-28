import  { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Nav from './Nav';

const Watchlist = () => {
  const {watchlist,deleteWatchlist}=useContext(GlobalContext);
  console.log(watchlist);
  return (
    <div>
      <Nav/>
      <div className='m-10 '>
        <p className='text-[28px] font-medium '> My WatchList</p>
         <ul className='grid grid-cols-5  mt-7'>
        {
         watchlist.length===0?( <p className='text-[20px] text-red-600 '>Nothing is Listed here</p>): (watchlist.map((item)=>{
            return(
              <li key={item.id}>
                <img  className={`${ item.title?"h-[280px] w-[190px] ":"h-[280px] w-[190px]"} object-contain`} src={`https://image.tmdb.org/t/p/w1280/${item.poster_path}`} alt={item.id} />
                <p className='text-[15px] mt-4 mb-1 font-medium truncate'>{item.title||item.name}</p>  
                <div className='flex gap-2 items-end my-4'>
                  <button className='bg-green-800 w-[90px] p-1 rounded-md text-white'>Watched</button>
                  <button onClick={()=>deleteWatchlist(item.id)} className='bg-red-800 w-[90px] p-1 rounded-md text-white'>Delete</button>
                </div>
              </li>
          )}))
        }
      </ul>
      </div>
    </div>
  )
}

export default Watchlist

