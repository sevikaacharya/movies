import { Link, useParams } from "react-router";
import useAPI from "../context/useAPI";

const Description = () => {
  const { type, id } = useParams();
  const { data, loading, error } = useAPI(`/${type}/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data found</p>;
console.log(data);
  return (
    <div>
      
     
      {
        type==="movie"?
        <div className="flex gap-8">
           <div className="w-[600px] h-[400px]">
             <img src={`https://image.tmdb.org/t/p/w1280/${data.poster_path}`} alt={data.id} />
           </div>
           <div>
            <p>{data.title}</p>
             <p>{data.overview}</p>
             <p>Release Date:{data.release_date}</p>
             <p>Time:{data.runtime}m</p>
             <p className="flex gap-4">Genres:{data.genres.map(item=>{return(<li className="flex" key={item.id}>{item.name}</li>)})}</p>
           </div>
        </div>:
        <div>
          
        </div>
      }
    </div>
  );
};

export default Description;
