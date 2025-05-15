import { useState } from "react";
import useFetch from "../../src/hooks/useFetch.js";
import useTitle from "../../src/hooks/useTitle.js";
import { Link, NavLink } from "react-router-dom";

import Card from "../components/CardComponent.js";

function MovieList({ apiPath, title }) {
  const { dataRepo: movies } = useFetch({ apiPath });
  const pageTitle = useTitle(title);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-center mb-4">
        <h1 className="text-gray-300 text-3xl">{pageTitle ? pageTitle : "Hello"}</h1>
      </div>

      <div className="flex justify-start flex-wrap">
        {movies
          .sort((a, b) => b.id - a.id)
          .slice(0, 12)
          .map((movie) => (
            <Card key={movie.id} movie={movie}></Card>
          ))}
      </div>
    </section>
  );
}

export default MovieList;
