import Footer from "../Component/Footer/Footer.jsx";
import Herohome from "../Component/Herohome/Herohome.jsx";
import Carte from "../Component/Carte/Carte.jsx";
import movie from "../Datamovie/movies.json";
import movie1 from "../Datamovie/movies.json";
import Pagination from "../Component/Pagination/Pagination.jsx";

export default function Accueil() {
  return (
    <div className="">
      <Herohome />
      <h1 className="text-center mb-11 text-3xl font-bold">
        NOTRE SELECTION DE FILMS
      </h1>

      <div className="flex flex-wrap">
        {movie1.map((card, index) => (
          <Carte
            key={index}
            titre={card.Title}
            image={card.Poster}
            Genre={card.Genre}
            Type={card.Type}
            Plot={card.Plot}
            Actors={card.Actors}
            Language={card.Language}
          />
        ))}
      </div>

      <div className="flex justify-center flex-col items-center mt-5 mb-9">
        <Pagination />
      </div>
      <Footer />
    </div>
  );
}
