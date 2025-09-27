import { NavLink } from 'react-router';
import useAPI from '../context/useAPI';
import MoviePoster from './MoviePoster';
const Tv = () => {
const movies=false;
const{data,loading,error}=useAPI("/tv/popular",1);
if(loading) return<p>loading...</p>
if(error) return<p>Some error Occur</p> 
  return (
    <div className='mt-7'>
        <div className='flex justify-between mb-6'>
          <h1 className='text-[25px] font-medium text-green-800'>Latest TV Shows</h1>
          <NavLink className='text-[18px] text-gray-700' to="/tv">View All </NavLink>
        </div>
        <ul className='grid grid-cols-5 gap-4'>
          {
           data.map((item)=>{
            return(
              <li key={item.id} className='mb-8'>
                <NavLink to={`/tv/${item.id}`}>
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

export default Tv
