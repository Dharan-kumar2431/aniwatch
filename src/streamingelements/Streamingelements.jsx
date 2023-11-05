import "./Streamingelements.css"
import { Link } from "react-router-dom";
import streaming from "../assets/navbar/download.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle, faComments } from "@fortawesome/free-solid-svg-icons";

const Streamingelements = () => {
    return(
        <div className="d-flex">
            <div>
            <Link to={""} style={{ textDecoration: "none" }}>
              <div className="mb-2 text-center">
                <img src={streaming} width="25px" alt="no image" />
              </div>
              <div>
                <span className="watch2gether">Watch2gether</span>
              </div>
            </Link>
          </div>

          <div>
            <Link to={""} style={{ textDecoration: "none" }}>
              <div className="mb-2 text-center">
                <FontAwesomeIcon
                  icon={faShuffle}
                  color="#ffdd95"
                  size="lg"
                  className="mt-1"
                />
              </div>
              <div style={{ marginBlockStart: "-1px" }}>
                <span className="Random">Random</span>
              </div>
            </Link>
          </div>

          <div>
            <Link to={""} style={{ textDecoration: "none" }}>
              <div className="mb-2 text-center">
                <div className="btn-group btn-toggle">
                  <button className="langtoggle enlang">EN</button>
                  <button className="langtoggle jplang" style={{backgroundColor:"gray"}}>JP</button>
                </div>
              </div>
              <div style={{ marginBlockStart: "10px" }}>
                <span className="Random">Anime Name</span>
              </div>
            </Link>
          </div>

          <div>
            <Link to={""} style={{ textDecoration: "none" }}>
              <div className="mb-2 text-center">
                <FontAwesomeIcon
                  icon={faComments}
                  color="#ffdd95"
                  size="lg"
                  className="mt-1"
                />
              </div>
              <div style={{ marginBlockStart: "7.5px" }}>
                <span className="Random">Community</span>
              </div>
            </Link>
          </div>
        </div>
    )
}

export default Streamingelements;