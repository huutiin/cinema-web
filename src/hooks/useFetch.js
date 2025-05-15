import axios from "axios";
import React, { useState, useEffect } from "react";

export default function useFetch({ apiPath, searchQuery = "" }) {
  const [dataRepo, setData] = useState([]);
  const url = `${process.env.REACT_APP_BASE_URL}${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchQuery}`; // Replace with your API key
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(url); // Replace with your API endpoint
        setData(response.data.results); // Assuming the API returns an array of movies in the 'results' field
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [apiPath]); // Dependency array to re-fetch if the URL changes
  return { dataRepo }; // Return the fetched data
}
