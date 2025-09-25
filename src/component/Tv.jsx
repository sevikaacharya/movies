import {useState,useEffect}from 'react'
import useAPI from '../context/useAPI';
const Tv = () => {
const{data,loading,error}=useAPI("/tv/popular",1);
if(loading) return<p>loading...</p>
if(error) return<p>Some error Occur</p> 
  return (
    <div className='mt-7'>
        <div className='flex justify-between mb-6'>
          <h1 className='text-[25px] font-medium text-green-800'>Latest TV Shows</h1>
          <button className='text-[18px] text-gray-700'>View All </button>
        </div>
        <ul className='grid grid-cols-5 gap-4'>
          {
           data.map((item)=>{
            return(
              <li key={item.id} className='mb-8'>
                  <img className='h-[280px] w-[200px] object-contain' src={`https://image.tmdb.org/t/p/w1280/${item.poster_path}`} alt={item.title} />
                  <p className='text-[15px] mt-4 mb-1 font-medium truncate'>{item.name}</p>  
                  <div className='flex gap-1 items-end'>
                     <p className='   font-medium text-[15px] text-red-900 mr-4 text-center rounded-md'>{item.original_language}</p>
                     <p className='text-[15px]'>{item.first_air_date}</p>
                  </div>
              </li>
            )
           })
          }
        </ul>
    </div>
  )
}

export default Tv
