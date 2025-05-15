import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";
import { useSearchParams } from "react-router-dom";
import { CardComponent } from "../components";

function Search({ apiPath }) {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const pageTitle = useTitle(`Search for ${searchQuery}`);

  const { dataRepo: movies } = useFetch({ apiPath, searchQuery });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <p className="text-3xl text-gray-700 dark:text-white">
        {movies.length === 0
          ? `No result found for "${searchQuery}"`
          : `Result for "${searchQuery}"`}
        "
      </p>
      <div className="flex justify-start flex-wrap">
        {movies.map((movie) => (
          <CardComponent key={movie.id} movie={movie}></CardComponent>
        ))}
      </div>
    </section>
  );
}

export default Search;
