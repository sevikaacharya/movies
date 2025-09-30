import { useState, useEffect } from "react";

const tmdb_base = "https://api.themoviedb.org/3";

const useAPI = (endPoint, page = 1, searchData = "") => {
  const [data, setData] = useState(null); // null works for both object & array
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
      try {
        let url = `${tmdb_base}${endPoint}?language=en-US&page=${page}`;

        // Add search query if endpoint is a search
        if (endPoint.includes("/search/") && searchData) {
          url += `&query=${encodeURIComponent(searchData)}`;
        }

        const res = await fetch(url, options);
        const json = await res.json();

        if (json.results) {
          setData(json.results);
        } else {
          setData(json);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    callData();
  }, [endPoint, page, searchData]);

  return { data, loading, error };
};

export default useAPI;
