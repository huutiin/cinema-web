import React from "react";
import {Link} from 'react-router-dom'

function PageNotFound() {
  return (
    <section className="py-10 bg-white font-[Arvo] min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full text-center">
        <div
          className="h-[400px] bg-center bg-no-repeat bg-cover items-center justify-center
          bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)]"
        >
          <h1 className="text-8xl font-bold text-gray-800">404</h1>
        </div>

        <div className="-mt-12 space-y-4">
          <h3 className="text-[28px] md:text-[32px] font-semibold text-gray-700">
            Looks like you're lost
          </h3>
          <p className="text-gray-600">
            The page you are looking for is not available!
          </p>
          <Link
            to="/"
            className="inline-block text-white bg-[#39ac31] px-5 py-2 my-5 rounded hover:opacity-90 transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PageNotFound;
