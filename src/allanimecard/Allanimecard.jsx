import Animecountcontrols from "../animecountcontrols/Animecountcontrols";
import "./Allanimecard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Allanimecard = (props) => {
  console.log(props);
  return (
    <div>
      <div className="row">
        {props.data.map((values) => (
          <div
            key={values.allanimeid}
            className=" col-lg-2 col-md-2 col-sm-6 col-6"
          >
            <div className="card allanimecard">
              <div className="animeimagecontrolsdiv">
                <div className="allanimeplayicon">
                  <FontAwesomeIcon icon={faPlay} color="white" size="2xl" />
                </div>
                <div className="animecontolsdiv">
                  <Animecountcontrols numberodsubepisode={values.numberodsubepisode} numberofdubepisode={values.numberofdubepisode} numberofepisode={values.numberofepisode}/>
                </div>
                <img
                  src={values.allanimeimage}
                  className="card-img-top allanimeimage"
                  alt="No image"
                />
              </div>
              <div className="card-body allanimebody">
                <div>
                  <h3
                    className="card-title text-white allanimename"
                    style={{ fontSize: "1em" }}
                  >
                    {values.allanimename}
                  </h3>
                </div>

                <div className="allanimetiming">
                  <span>TV</span>
                  <span className="dot"></span>
                  <span>{values.allanimetiming}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allanimecard;
