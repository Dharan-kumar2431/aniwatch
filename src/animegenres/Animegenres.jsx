import "./Animegenres.css";

const Animegenres = () => {
  const animeGenres = [
    { genre: "Action", color: "#86e3ce" },
    { genre: "Comedy", color: "#ffdd95" },
    { genre: "Drama", color: "#fc887b" },
    { genre: "Sci-Fi", color: "#ccabda" },
    { genre: "Horror", color: "#abccd8" },
    { genre: "Romance", color: "#d8b2ab" },
    { genre: "Thriller", color: "#86e3ce" },
    { genre: "Fantasy", color: "#d8b2ab" },
    { genre: "Mystery", color: "#abccd8" },
    { genre: "Adventure", color: "#ffdd95" },
    { genre: "Sport", color: "#86e3ce" },
    { genre: "Animation", color: "#86e3ce" },
    { genre: "Biography", color: "#fc887b" },
    { genre: "Crime", color: "#86e3ce" },
    { genre: "Family", color: "#d8b2ab" },
    { genre: "History", color: "#ffdd95" },
    { genre: "war", color: "#abccd8" },
    { genre: "Western", color: "#fc887b" },
    { genre: "Superhero", color: "#ccabda" },
    { genre: "Fantasy", color: "#ffdd95" },
    { genre: "Spy", color: "#d8b2ab" },
    { genre: "Romantic Comedy", color: "#86e3ce" },
    { genre: "Sci-Fi Fantasy", color: "#fc887b" },
    { genre: "Magic", color: "#ffdd95" },
  ];
  return (
    <div>
      <h3 className="genres">Genres</h3>

      <div className=" animesgenres">
        <div className="row">
          {animeGenres.map((val, id) => (
            <div className="col-4 mb-3" key={id}>
              <button className="animegenresbutton" style={{color: val.color}}>{val.genre}</button>
            </div> 
          ))}
        </div>
        <button className="showmorebtn">Show More</button>
      </div>
    </div>
  );
};

export default Animegenres;
