  import React, { useState,useEffect } from 'react'
  import Nav from './Nav';
  import { useParams,useSearchParams,NavLink } from 'react-router';
  import MoviePoster from './MoviePoster';
  const ViewAllMovies = () => {
    const[searchParams,setSearchParams]=useSearchParams();
   const urlPage=Number(searchParams.get("page"))||1;
    const{type}=useParams();
   const[viewAllMovies,setViewAllMovies]=useState([]);
   const movies=type==="movie"?true:false;
    const[page,setPage]=useState(urlPage)
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
          const data=await fetch(`https://api.themoviedb.org/3/${type}/popular?language=en-US&page=${page}`, options)
          const res= await data.json();
          setViewAllMovies(res.results)
          console.log("movies=",res.results);
          }
          callData()
        },[page]);
        useEffect(()=>{
          setSearchParams({page});
        },[page,setSearchParams]);
    return (
      <div>
        <Nav/>
        <div className='flex mt-10 justify-self-center '>
          <ul className='grid grid-cols-5 gap-4 w-[1200px]'>
            {
            viewAllMovies.map((item)=>{
              return(
                <li key={item.id} className='mb-8'>
                <NavLink to={`/${type}/${item.id}`}>
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
        </div >
        <div className='flex justify-self-center gap-17'>
          <button disabled={page===1}  className='bg-gray-600 w-[100px] h-[40px] rounded text-white' onClick={()=>setPage(page-1)}>back</button>
          <button className='bg-gray-600 w-[100px] h-[40px] rounded text-white' onClick={()=>setPage(page+1)}>next</button>
        </div>
      </div>
    )
  }

  export default ViewAllMovies
