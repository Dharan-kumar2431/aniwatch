import "./Toptenanimecards.css";
import { Link } from "react-router-dom";
import Animecountcontrols from "../animecountcontrols/Animecountcontrols";

const Toptenanimecards = (props) => {
  console.log(props.toptendata);
  return (
    <div>
      {props.toptendata.map((val) => (
        <div className="row" key={val.animenumber}>
          <div className="col-2 text-center">
            <span className="animeindex">{val.animenumber}</span>
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-3 toptenanimecontent">
                <img
                  src={val.animeimage}
                  alt="no image"
                  className="toptenanimeimg"
                />
              </div>
              <div className="col-7 p-0">
                <div>
                  <h3 className="toptenanimetitle">
                    <Link to={""} className="toptenanimetitlelink">
                      {val.animetitle}
                    </Link>
                  </h3>
                </div>
                <div>
                  <Animecountcontrols numberodsubepisode={val.numberodsubepisode} numberofdubepisode={val.numberofdubepisode} numberofepisode={val.numberofepisode}/>
                </div>
              </div>
            </div>
            <hr style={{color:"lightgray",width:"240px",opacity:"0.1"}}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toptenanimecards;
