import useAPI from"../context/useAPI";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation} from 'swiper/modules';
import { NavLink } from "react-router";
const Carasouel = () => {
const{data,loading,error}=useAPI("/movie/now_playing",1);
if(loading) return<p>loading...</p>
if(error) return<p>Some error Occur</p>

  return (
    <div className=' px-10 mt-10 pb-10'>
      <h1 className='text-[25px] font-medium text-green-800 mb-5'>Now Playing</h1>
      <Swiper navigation={true} modules={[Autoplay,Navigation]} spaceBetween={30} slidesPerView={5} loop={true} autoplay={{delay:2500}} className="mySwiper">
        {
         data.slice(7,14).map((item)=>
        (
          <SwiperSlide key={item.id}>
              <NavLink to={`/movie/now_playing/${item.id}` }>
                 <img className='h-[400px] rounded' src={`https://image.tmdb.org/t/p/w1280/${item.poster_path}`} alt={item.title} />
                 <p className='text-[15px] mt-4 mb-1 font-medium truncate'>{item.title}</p>  
                 <div className='flex gap-1 items-end'>
                 <p className='   font-medium text-[15px] text-red-900 mr-4 text-center rounded-md'>{item.original_language}</p>
                <p className='text-[15px]'>{item.release_date}</p>
                 </div>
              </NavLink>

            </SwiperSlide>
         ))
        }
        
      </Swiper>
    </div>
  )
}

export default Carasouel
