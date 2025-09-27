import { useState, useEffect } from "react";

const tmdb_base = "https://api.themoviedb.org/3";

const useAPI = (endPoint, page = 1) => {
  const [data, setData] = useState(null);   // null works for both object & array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        const res = await fetch(
          `${tmdb_base}${endPoint}?language=en-US&page=${page}`,
          options
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();

        // ✅ Decide if it's a list or a single object
        if (json.results) {
          setData(json.results); // list endpoint (popular, trending, now_playing)
        } else {
          setData(json); // single endpoint (/movie/:id, /tv/:id)
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    callData();
  }, [endPoint, page]);

  return { data, loading, error };
};

export default useAPI;
