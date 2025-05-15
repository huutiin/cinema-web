import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const MovieRecommendations = ({ movie_id }) => {
  const [dataFetch, setDataFetch] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(url2);
        setDataFetch(response.data); // Đảm bảo response có .results
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovie();
  }, []);
  const url2 = `${process.env.REACT_APP_BASE_URL}movie/${movie_id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`;
  return (
    <section>
      <div className="py-5 px-52">
        <h2 className="text-2xl text-gray-700 font-bold mb-4 dark:text-white">
          Recommendations
        </h2>
        <div className="flex overflow-x-auto space-x-4">
          {dataFetch.results &&
            dataFetch.results.map((movie) => (
              <div key={movie.id} className="p-2 group relative max-w-48">
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    className="max-w-44 rounded-lg opacity-75 group-hover:opacity-100 transition"
                  />
                  <div className="absolute rounded-lg inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <span className="text-white text-center text-xl font-semibold px-2">
                      {movie.title}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MovieRecommendations;
