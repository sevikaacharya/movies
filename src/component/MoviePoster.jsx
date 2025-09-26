import { NavLink } from "react-router"


const MoviePoster = ({id,movies,poster_path,title,language,release_date}) => {
  const content=movies?"/movies/":"/tv/"
  return (
    <NavLink to={`${content}${title}}`}>
        <img  className={`${movies?"h-[280px] w-[200px] ":"h-[280px] w-[340px]"} object-contain`} src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} alt={id} />
        <p className='text-[15px] mt-4 mb-1 font-medium truncate'>{title}</p>  
        <div className='flex gap-1 items-end'>
          <p className='   font-medium text-[15px] text-red-900 mr-4 text-center rounded-md'>{language}</p>
          <p className='text-[15px]'>{release_date} </p>
        </div>
    </NavLink>
  )
}

export default MoviePoster
