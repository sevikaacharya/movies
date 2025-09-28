import { useParams } from "react-router";
import useAPI from "../context/useAPI";
import { FaBookmark } from "react-icons/fa6";
import Nav from "./Nav";
import { useState, useEffect } from "react";

const Description = () => {
  const { type, id } = useParams();
  const { data, loading, error } = useAPI(`/${type}/${id}`);

  const [selectedSeason, setSelectedSeason] = useState(null);
  const [episodeNumber, setEpisodeNumber] = useState(null);

  // Initialize default season after data loads
  useEffect(() => {
    if (type === "tv" && data?.seasons?.length > 0) {
      setSelectedSeason(data.seasons[0].season_number);
      setEpisodeNumber(data.seasons[0]);
    }
  }, [data, type]);

  const showEp = (e) => {
    const seasonNum = parseInt(e.target.value);
    const seasonObj = data.seasons.find(
      (season) => season.season_number == seasonNum // loose equality to handle type mismatch
    );
    setSelectedSeason(seasonNum);
    setEpisodeNumber(seasonObj);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data found</p>;

  return (
    <div>
      <Nav />
      <div
        className="mt-8 bg-no-repeat bg-center bg-cover h-[670px]"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})` }}
      >
        <div className="w-full h-full bg-black/50 backdrop-blur-sm flex justify-center items-center">
          <div className="flex gap-8 pl-8 text-white">
            <div className="w-[400px]">
              <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.id} />
            </div>
            <div className=" ">
              <p className="text-[40px] font-medium">
                {type === "movie"
                  ? `${data.title} (${data.release_date.slice(0, 4)})`
                  : `${data.name} (${data.first_air_date.slice(0, 4)})`}
              </p>
              <p className="flex gap-2 text-[17px]">
                {data.genres.map((item) => (
                  <li className="flex" key={item.id}>
                    {item.name}
                  </li>
                ))}
              </p>
              <p className="text-[17px] pt-5 w-[900px]">
                <span className="text-[25px] font-medium">Overview</span> <br /> {data.overview}
              </p>
              <div className="flex gap-4 pt-5 text-[17px] pb-4">
                <p>Duration: {data.runtime} min</p>
                <p>Language: {data.spoken_languages[0].english_name}</p>
                <p>Status: {data.status}</p>
              </div>
              <p className="pb-4">Country: {data.production_countries[0].name}</p>
              <p className="w-[900px]">
                Production:{" "}
                {data.production_companies.map((company, index) => (
                  <span key={index}>
                    {company.name} {index<data.production_companies.length-1?", ":""}
                  </span>
                ))}
              </p>

              {type === "tv" && (
                <div className="mt-4 pt-4 ">
                  <p>Last Season to Air : {data.last_air_date}</p>
                   <div className="flex gap-4 items-center pt-4">
                  <select
                    name="season"
                    id="season"
                    className="bg-black/50 border border-white rounded p-2 mt-2"
                    onChange={showEp}
                    value={selectedSeason}
                  >
                    {data.seasons.map((season) => (
                      <option key={season.id} value={season.season_number}>
                        {season.name}
                      </option>
                    ))}
                  </select>
                  <p className="mt-2">
                    {episodeNumber
                      ? ` (Episodes: ${episodeNumber.episode_count})`
                      : "Select a season"}
                  </p>
                   </div>
                </div>
              )}

              <div className="flex gap-4 pt-8">
                <p className="bg-yellow-500 w-[100px] text-center rounded h-[30px] pt-1">
                  Tmdb: {data.vote_average}
                </p>
                <p className="text-3xl">
                  <FaBookmark />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
