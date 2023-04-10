import image1 from "../../assets/POSTER/Action/dune.jpg";
import image2 from "../../assets/POSTER/Action/The Adam Project.jpg";
import image3 from "../../assets/POSTER/Action/The Adam Project.jpg";
import image4 from "../../assets/POSTER/Action/The Adam Project.jpg";
import image5 from "../../assets/POSTER/Action/The Adam Project.jpg";
import image6 from "../../assets/POSTER/Action/Uncharted (2022).jpg";

const Carte = () => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl ">
      <figure>
        <img src={image1} />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch Now</button>
        </div>
      </div>

      <figure>
        <img src={image2} />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch Now</button>
        </div>
      </div>

      <figure>
        <img src={image3} />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch Now</button>
        </div>
      </div>
    </div>
  );
};

export default Carte;
