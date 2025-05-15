import { Card } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import backup from "../assets/images/logo3.jpg";
import backup2 from "../assets/images/comming_soon4.jfif";

function CardComponent({ movie }) {
  const { id, title, poster_path, release_date, overview } = movie;
  const imageUrl = poster_path
    ? `${process.env.REACT_APP_IMAGE_URL}${poster_path}`
    : backup2;
  function handleClick(id) {
    console.log(id);
  }
  return (
    <div className="w-full sm:w-1/3 lg:w-1/4 p-3">
      <Link to={`/movie/${id}`}>
        <Card className="cursor-pointer relative">
          <img
            onClick={() => handleClick(id)}
            src={imageUrl}
            alt={title}
            className="rounded-lg mb-2 h-96 w-full object-cover opacity-75"
          />
          <div className="absolute bottom-4 left-0 w-full text-center bg-black bg-opacity-50 text-white py-2">
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
        </Card>
      </Link>
    </div>
  );
}

export default CardComponent;
