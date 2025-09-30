import  { useEffect, useState } from 'react'

import Carasouel from './Carasouel';
import Trending from './Trending';
import Movies from './Movies';
import Tv from './Tv';
import Nav from './Nav';
import { NavLink } from 'react-router';
const Main = () => {
    const[topRatedData,setTopRatedData]=useState([]);
      const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
        }
      };
    useEffect(()=>{
    const callData=async()=>
    {
     const data=await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
     const res= await data.json();
     setTopRatedData(res.results)
     console.log("trend=",res.results);
    }
    callData()
  },[])
  return (
    <div>
    <div className='bg-gray-200'>
    <Nav/>
    <div className='flex items-center mx-10  bg-gray-200'>
      <div>
        <p className=' bg-white mt-5 px-3 py-2 text-[15px] '>Ever wanted to watch free movies online? Then look no further. Watch movies of various categories only here.
         Stream HD quality movies on your TV, laptop or mobile. Here you can watch the movies of your choice without any 
         registration or signups - most hassle-free option. Stop visiting terrible sites that promise movies in HD and
          4K quality and serve you crap, and waste your time and energy. You can easily search the movies of your choice
           here- from blockbusters to rare critically- acclaimed gems, we have them all.
         We promise regular uploads. So, your favorite movie is just a click away! Think no more, start streaming.</p>
      </div>
    </div>
     <Carasouel/>
     <div className='mx-10 flex gap-[80px]     '>
      <div>
        <Trending/>
        <Movies/>
        <Tv/>
      </div>
      <div className=' w-[500px]  hidden md:block lg:block'  >
        <h1 className='mb-8 text-[25px] font-medium text-green-800'>Top IMDB Rating</h1>
        <ul c >
          {
            topRatedData.map(item=>{
              return(
                <li key={item.id} className='w-[100px]' >
                 <NavLink className='flex mb-4 gap-5 ' to={`/tv/${item.id}`}>
                     <img  className='h-[150px] rounded' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
                     <div >
                       <p className='text-[15px] mt-4 mb-1 font-medium lg:w-[130px] md:w-[100px] truncate'>{item.name}</p>  
                     
                       <p className='   font-medium text-[15px] text-red-900 mr-4 rounded-md'>{item.original_language}</p>
                       <p className='text-[15px]'>{item.first_air_date}</p>
                      
        
                  </div>
                 </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
     </div>
    </div>
    </div>
  )
}

export default Main
