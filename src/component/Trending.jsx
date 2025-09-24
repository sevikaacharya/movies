import React, { useEffect, useState } from 'react'
import MoviePoster from './MoviePoster';

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
                <MoviePoster
                 id={item.id}
                 movies={movies} 
                 poster_path={item.poster_path} 
                 language={item.original_language}
                 title={movies?item.title:item.original_name}
                 release_date={movies?item.release_date:item.first_air_date}
                  />
                 
              </li>
              )
            })
          }
      </ul>
    </div>
  )
}

export default Trending
