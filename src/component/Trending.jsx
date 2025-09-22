import React, { useEffect, useState } from 'react'

const Trending = () => {
  const[movies,setMovies]=useState(true);
  const[trend,setTrend]=useState([]);
    const options = {
      method: 'GET',
      headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
      } 
    };
  useEffect(()=>{
    const callFunc=async()=>
    {
      const data=await fetch(`https://api.themoviedb.org/3/trending/${movies?"movie":"tv"}/day?language=en-US`,options);
      const res=await data.json();
      setTrend(res.results);
      console.log(res.results);

    }
    callFunc();
  },[movies])
  return (
    <div>
      <div className='flex justify-items-center gap-4 mb-8'>
        <h1 className='text-[25px] text-green-800 font-medium'>Trending</h1>
        <button onClick={()=>setMovies(true)} className={`${movies?"bg-green-800 text-white":" text-black"} text-[17px] h-[35px] w-[80px]  rounded mr-1`}>Movies</button>
        <button onClick={()=>setMovies(false)} className={`${!movies?"bg-green-800 text-white":"text-black"} text-[17px] h-[35px] w-[80px] rounded mr-1`}>Series</button>
      </div>
      <ul className='grid grid-cols-5 gap-4 '>
          {
            trend.map((item)=>
            {
              return(
              <li key={item.id} className='mb-8'>
                <img  className={`${movies?"h-[280px] w-[200px] ":"h-[280px] w-[340px]"} object-contain`} src={`https://image.tmdb.org/t/p/w1280/${item.poster_path}`} alt={item.id} />
                <p className='text-[15px] mt-4 mb-1 font-medium truncate'>{movies?item.title:item.original_name}</p>  
                <div className='flex gap-1 items-end'>
                  <p className='   font-medium text-[15px] text-red-900 mr-4 text-center rounded-md'>{item.original_language}</p>
                  <p className='text-[15px]'>{movies?item.release_date:item.first_air_date}</p>
                </div>
                 
              </li>
              )
            })
          }
      </ul>
    </div>
  )
}

export default Trending
