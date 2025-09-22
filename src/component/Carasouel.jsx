import  { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation} from 'swiper/modules';
const Carasouel = () => {
  const[carasouelData,setCarasouelData]=useState([])
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
   const data=await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, options);
   const res= await data.json();
   setCarasouelData(res.results)
   console.log(res.results);
  }
  callData()
},[])
  return (
    <div className=' px-10 mt-10 pb-10'>
      <h1 className='text-[25px] font-medium text-green-800 mb-5'>Featured </h1>
      <Swiper navigation={true} modules={[Autoplay,Navigation]} spaceBetween={30} slidesPerView={5} loop={true} autoplay={{delay:2500}} className="mySwiper">
        {
         carasouelData.slice(7,14).map((item)=>
        (
          <SwiperSlide key={item.id}>
            <img className='h-[400px] rounded' src={`https://image.tmdb.org/t/p/w1280/${item.poster_path}`} alt={item.title} />
            <p className='text-[15px] mt-4 mb-1 font-medium truncate'>{item.title}</p>  
            <div className='flex gap-1 items-end'>
               <p className='   font-medium text-[15px] text-red-900 mr-4 text-center rounded-md'>{item.original_language}</p>
               <p className='text-[15px]'>{item.release_date}</p>
            </div>

            </SwiperSlide>
         ))
        }
        
      </Swiper>
    </div>
  )
}

export default Carasouel
