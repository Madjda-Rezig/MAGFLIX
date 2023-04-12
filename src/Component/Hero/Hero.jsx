import { Link } from "react-router-dom";
const Hero = ({ titre, image, Genre, Type, Plot, Actors, Language }) => {
  return (
    <div className="hero min-h-screen bg-slate-50">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{titre}</h1>
          <p className="py-6 text-xl">{Plot}</p>
          <h3 className="mb-5 font-bold">Genre : {Genre}</h3>
          <h3 className="mb-5 font-bold">Type : {Type}</h3>
          <h3 className="mb-5 font-bold">Actors : {Actors}</h3>
          <h3 className="mb-5 font-bold">Language : {Language}</h3>

          <Link to={"/Stream"}>
            <button className="btn btn-primary mt-10">WATCH NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
