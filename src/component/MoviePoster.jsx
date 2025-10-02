const MoviePoster = ({id,movies,poster_path,title,language,release_date}) => {
  return (
    <div className="w-[180px] md:w-[190px] lg:w-[200px] ">
        <img  className={"h-[280px] w-[180px] md:w-[190px] lg:w-[200px] object-contain"} src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} alt={id} />
        <p className='text-[15px] pl-1  mb-1 font-medium truncate md:w-[130px] lg:w-[200px]'>{title}</p>  
        <div className='flex gap-1 items-end pl-1'>
          <p className='   font-medium text-[15px] text-red-900 mr-4 text-center rounded-md'>{language}</p>
          <p className='text-[15px]'>{release_date} </p>
        </div>
    </div>
  )
}

export default MoviePoster
