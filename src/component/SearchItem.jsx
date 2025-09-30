import { NavLink, useSearchParams } from "react-router";
import useAPI from "../context/useAPI";
import Nav from "./Nav";

const SearchItem = () => {
  const [searchParams] = useSearchParams();
  const searchData = searchParams.get("query") || "";
  const endPoint = searchData ? "/search/multi" : "/trending/all/day";

  const { data, loading, error } = useAPI(endPoint, 1, searchData);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!data || data.length === 0)
    return <p className="text-center mt-10">No results found.</p>;

  return (
    <div>
      <Nav></Nav>
      <ul className="grid grid-cols-5 gap-4 mt-7">
        {data.map((item) => (
          <li key={item.id} className="text-center">
           <NavLink to={item.title ? `/movie/${item.id}` : `/tv/${item.id}`}>
            <img
              className={`${
                item.title ? "h-[280px] w-[200px]" : "h-[280px] w-[340px]"
              } object-contain mx-auto`}
              src={`https://image.tmdb.org/t/p/w1280/${item.poster_path}`}
              alt={item.title || item.name}
            />
            <p className="text-[15px] mt-4 mb-1 font-medium truncate">
              {item.title || item.name}
            </p>
            <div className="flex gap-1 items-end justify-center">
              <p className="font-medium text-[15px] text-red-900 mr-4 text-center rounded-md">
                {item.original_language}
              </p>
              <p className="text-[15px]">
                {item.release_date || item.first_air_date}
              </p>
            </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchItem;
