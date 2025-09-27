import React, { useState } from 'react'
import MoviePoster from './MoviePoster';
import useAPI from '../context/useAPI';
import { NavLink } from 'react-router';
const Trending = () => {
  const[movies,setMovies]=useState(true);
  const endPoint=movies?"/trending/movie/day":"/trending/tv/day";
  const{data,loading,error}=useAPI(endPoint,1);
  if(loading) return<p>loading...</p>
 if(error) return<p>Some error Occur</p> 
  return (
    <div>
      <div className='flex justify-items-center gap-4 mb-8'>
        <h1 className='text-[25px] text-green-800 font-medium'>Trending</h1>
        <button onClick={()=>setMovies(true)} className={`${movies?"bg-green-800 text-white":" text-black"} text-[17px] h-[35px] w-[80px]  rounded mr-1`}>Movies</button>
        <button onClick={()=>setMovies(false)} className={`${!movies?"bg-green-800 text-white":"text-black"} text-[17px] h-[35px] w-[80px] rounded mr-1`}>Series</button>
      </div>
      <ul className='grid grid-cols-5 gap-4 '>
          {
            data.map((item)=>
            {
              return(
              <li key={item.id} className='mb-8'>
               <NavLink to={`/trending/${movies?"movie":"tv"}/${item.id}`}>
                <MoviePoster
                 id={item.id}
                 movies={movies} 
                 poster_path={item.poster_path} 
                 language={item.original_language}
                 title={movies?item.title:item.original_name}
                 release_date={movies?item.release_date:item.first_air_date}
                  />
               </NavLink>
                 
              </li>
              )
            })
          }
      </ul>
    </div>
  )
}

export default Trending
