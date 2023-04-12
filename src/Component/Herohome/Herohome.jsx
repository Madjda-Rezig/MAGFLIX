import image from "../../assets/mercredi.jpg";

const Herohome = () => {
  return (
    <div
      className="hero min-h-screen mb-8 justify-start"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-md ml-16">
          <h1 className="mb-9 text-7xl font-bold ">WEDENSDAY ADAMS</h1>
          <p className="mb-8 mt-7">
            Brillante, sarcastique et un peu morte à l'intérieur, Mercredi
            Addams enquête sur une série de crimes tout en se faisant des amis
            (et des ennemis) à l'Académie Nevermore
          </p>
          <button className="btn btn-primary">WATCH NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Herohome;
