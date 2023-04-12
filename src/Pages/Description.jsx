import Footer from "../Component/Footer/Footer.jsx";
import Datamovie from "../Datamovie/movies.json";
import Hero from "../Component/Hero/Hero.jsx";
import { useParams } from "react-router-dom";

export default function Description() {
  const parametre = useParams("movie");
  const ceMovie = Datamovie.filter((movie) => movie.Title === parametre.movie);
  return (
    <div className="">
      <div className="flex flex-wrap">
        <Hero
          titre={ceMovie[0].Title}
          image={ceMovie[0].Poster}
          Genre={ceMovie[0].Genre}
          Type={ceMovie[0].Type}
          Plot={ceMovie[0].Plot}
          Actors={ceMovie[0].Actors}
          Language={ceMovie[0].Language}
        />
      </div>
      <Footer />
    </div>
  );
}
