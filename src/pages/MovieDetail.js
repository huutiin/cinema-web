import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import axios from "axios";
import backup2 from "../assets/images/comming_soon4.jfif";
import { Link } from "react-router-dom";

import MovieRecommend from "../pages/MovieRecommendations";

function MovieDetail() {
  const params = useParams();
  const [dataInfo, setDataInfo] = useState({});
  const {
    id,
    title,
    genres,
    overview,
    vote_average,
    vote_count,
    runtime,
    release_date,
    production_companies,
    spoken_languages,
    imdb_id,
  } = dataInfo;

  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(url);
        setDataInfo(response.data);
        // console.log(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovie();
    return () => {};
  }, [dataInfo]);

  const pageTitle = useTitle(title);

  const imageUrl = dataInfo.poster_path
    ? `${process.env.REACT_APP_IMAGE_URL}${dataInfo.poster_path}`
    : backup2;

  return (
    <>
      <section className="grid grid-cols-3 gap-4 px-52 py-5">
        <div className="max-w-sm">
          <img className="rounded-lg" src={imageUrl} alt={title} />
        </div>
        <div className="col-span-2 pl-10 text-lg text-gray-700 dark:text-white">
          <h1 className="text-4xl font-bold my-3">{title}</h1>
          <p className=" text-gray-700 my-4 text-center lg:text-left dark:text-white">
            {overview}
          </p>
          {genres ? (
            <p className="my-4 flex gap-2">
              {genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="mr-2 border-2 border-gray-200 rounded text-gray-400 text-sm dark:border-gray-600 drak:text-white p-2"
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center mb-2">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
              {vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
            >
              {`${vote_count} reviews`}
            </a>
          </div>

          <div className="flex">
            <strong>Runtime: </strong>
            <p className="ml-2">{`${runtime} min`}</p>
          </div>
          <div className="flex">
            <strong>Release date: </strong>
            <p className="ml-2">
              {release_date
                ? `${release_date.split("-").reverse().join("/")}`
                : ""}
            </p>
          </div>
          <div className="flex">
            <strong>Production Companies: </strong>
            {production_companies ? (
              <p>
                {production_companies.map((production, index) => (
                  <span key={production.id} className="ml-2">
                    {production.name}
                    {index < production_companies.length - 1 && ","}
                  </span>
                ))}
              </p>
            ) : (
              " Unknown"
            )}
          </div>
          <div className="flex">
            <strong>Languages: </strong>
            {/* {spoken_languages ? (
            <p>
              {spoken_languages.map((languages, index) => (
                <span key={languages.id} className="ml-2">
                  {languages.english_name}
                  {index < spoken_languages.length - 1 && ","}
                </span>
              ))}
            </p>
          ) : (
            " Unknown"
          )} */}
          </div>
          <div className="flex">
            <strong>IMDB ID: </strong>
            {imdb_id ? (
              <a
                className="ml-2"
                href={`${process.env.REACT_APP_IMDB_URL}${imdb_id}`}
                target="_blank"
              >{`${imdb_id}`}</a>
            ) : (
              " Unknown"
            )}
          </div>
          {/* https://www.imdb.com/title/tt20969586/ */}
        </div>
      </section>
      <MovieRecommend movie_id={params.id}></MovieRecommend>
    </>
  );
}

export default MovieDetail;
