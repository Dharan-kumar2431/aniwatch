import "./Recommendationanime.css";
import animegif from "../assets/recommandation/recommandationgif.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import {
  faTelegram,
  faXTwitter,
  faFacebook,
  faRedditAlien,
} from "@fortawesome/free-brands-svg-icons";

const Recommendationanime = () => {
  return (
    <div className="recommendationanime">
      <div className="row">
        <div className="d-flex col-md-2 col-sm-5 col-8">
          <div>
            <img
              src={animegif}
              alt="No image"
              width="60px"
              height="60px"
              className="recommendationgif"
            />
          </div>
          <div className="mx-3 shareanime">
            <span style={{ color: "#ffdd95" }}>Share AniWatch</span>
            <p>to your friends</p>
          </div>
        </div>

        <div className="col-md-9 col-sm-7 col-4 sharedetails">
          <div className="d-flex">
            <div style={{ marginTop: "10px" }} className="">
              <span className="numberofshares">32.1k</span>
              <span>Shares</span>
            </div>
            <div className="d-md-flex d-sm-none d-none">
              <button
                className="btn recommandationshare-button"
                style={{ display: "inline-block" }}
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  color="white"
                  className="recommandationshare-icon"
                  size="lg"
                />
                <span className="sharetext">Share</span>
              </button>
            </div>
            <div className="d-md-flex d-sm-none d-none">
              <button
                className="btn recommandationshare-button bg-black"
                style={{ display: "inline-block" }}
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  color="white"
                  className="recommandationshare-icon"
                  size="lg"
                />
                <span className="sharetext">Tweet</span>
              </button>
            </div>
            <div className="d-md-flex d-sm-none d-none">
              <button
                className="btn recommandationshare-button"
                style={{ display: "inline-block" }}
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  color="white"
                  className="recommandationshare-icon"
                  size="lg"
                />
                <span className="sharetext">Share</span>
              </button>
            </div>
            <div className="d-md-flex d-sm-none d-none">
              <button
                className="btn recommandationshare-button alieanbutton"
                style={{ display: "inline-block" }}
              >
                <FontAwesomeIcon
                  icon={faRedditAlien}
                  color="white"
                  className="recommandationshare-icon"
                  size="lg"
                />
                <span className="sharetext">Share</span>
              </button>
            </div>
            <div>
              <button className="btn sharenodes">
                <FontAwesomeIcon icon={faShareNodes} color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendationanime;
