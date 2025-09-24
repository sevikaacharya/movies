  import React, { useState,useEffect } from 'react'
  import Nav from './Nav';

  const ViewAllMovies = () => {
    const[viewAllMovies,setViewAllMovies]=useState([]);
    const[page,setPage]=useState(1)
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
          const data=await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options)
          const res= await data.json();
          setViewAllMovies(res.results)
          console.log("movies=",res.results);
          }
          callData()
        },[page]);
    return (
      <div>
        <Nav/>
        <div className='flex mt-10 justify-self-center '>
          <ul className='grid grid-cols-5 gap-4 w-[1200px]'>
            {
            viewAllMovies.map((item)=>{
              return(
                <li key={item.id} className='mb-8'>
                    <img className='h-[280px] w-[200px] object-contain' src={`https://image.tmdb.org/t/p/w1280/${item.poster_path}`} alt={item.title} />
                    <p className='text-[15px] mt-4 mb-1 font-medium truncate'>{item.title}</p>  
                    <div className='flex gap-1 items-end'>
                      <p className='   font-medium text-[15px] text-red-900 mr-4 text-center rounded-md'>{item.original_language}</p>
                      <p className='text-[15px]'>{item.release_date}</p>
                    </div>
                </li>
              )
            })
            }
          </ul>
        </div >
        <div className='flex justify-self-center gap-17'>
          <button disabled={page===1} className='bg-gray-600 w-[100px] h-[40px] rounded text-white' onClick={()=>setPage(page-1)}>back</button>
          <button className='bg-gray-600 w-[100px] h-[40px] rounded text-white' onClick={()=>setPage(page+1)}>next</button>
        </div>
      </div>
    )
  }

  export default ViewAllMovies
