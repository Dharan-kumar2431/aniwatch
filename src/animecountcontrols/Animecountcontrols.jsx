import "./Animecountcontrols.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClosedCaptioning, faMicrophone } from "@fortawesome/free-solid-svg-icons";

const Animecountcontrols = (props) => {
    console.log(props, "numbers")
  return (
    <div>
      <div className="d-flex">
        <div>
          <button className="animescontrols subanimes">
            <FontAwesomeIcon icon={faClosedCaptioning} />
            <span className="animecontrolsnumber">{props.numberodsubepisode}</span>
          </button>
        </div>
        <div>
          <button className="animescontrols dubanimes">
            <FontAwesomeIcon icon={faMicrophone} />
            <span className="animecontrolsnumber">{props.numberofdubepisode}</span>
          </button>
        </div>
        <div>
          <button className="animescontrols orginalanimes">
            <span className="animecontrolsnumber">{props.numberofepisode}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Animecountcontrols;
