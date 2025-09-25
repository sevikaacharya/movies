import { useState, useEffect } from "react";

const tmdb_base = "https://api.themoviedb.org/3";

const useAPI = (endPoint, page = 1) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const[movies,setMovies]=useState(true);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  };

  useEffect(() => {
    const callData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${tmdb_base}${endPoint}?language=en-US&page=${page}`, options);
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        setData(json.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    callData();
  }, [endPoint, page]);

  return { data, loading, error,movies };
};

export default useAPI;
