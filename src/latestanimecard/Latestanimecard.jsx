import Animecountcontrols from "../animecountcontrols/Animecountcontrols";
import "./Latestanimecard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Latestanimecard = (props) => {
  return (
    <div>
      <div className="row">
        {props.data.map((values) =>
          values.latestanimeset1.map((data) => (
            <div key={data.latestanimeid} className="col-md-3 col-sm-6 col-6">
              <div className="card latestanimecard">
                <div className="latestanimeimagesdiv">
                <div className="playicon">
                  <FontAwesomeIcon icon={faPlay} size="2xl" color="white"/>
                </div>
                <div className="animecontrols">
                  <Animecountcontrols numberodsubepisode={data.numberodsubepisode} numberofdubepisode={data.numberofdubepisode} numberofepisode={data.numberofepisode}/>
                </div>
                <img
                  src={data.latestanimeimage}
                  className="card-img-top latestanimeimage"
                  alt="No image"
                />
                </div>
                <div className="card-body latestanimebody">
                  <div>
                  <h5 className="card-title text-white">{data.latestanimename}</h5>
                  <p className="latestanimedescription d-md-flex d-sm-none d-none">
                    {data.latestanimedescription}
                  </p>
                  </div>

                  <div className="latestanimetiming">
                    <span>TV</span>
                    <span className="dot"></span>
                    <span>{data.latestanimetiming}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Latestanimecard;
