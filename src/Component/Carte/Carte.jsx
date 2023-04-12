import { Link } from "react-router-dom";
const Carte = ({ titre, image }) => {
  return (
    <div className="card w-72 bg-base-100 shadow-xl mb-9 justify-center ml-16">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-center grid">
          <h1 className="text-black text-2xl text-center">{titre}</h1>

          <Link to={`/Description/${titre}`}>
            <button className="btn btn-primary justify-center">
              Watch Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carte;
