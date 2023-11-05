import { Link } from "react-router-dom";
import "./Socialmediaelements.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {faRedditAlien,faDiscord,faTwitter} from '@fortawesome/free-brands-svg-icons'

const Socialmediaelements = () => {
  return (
    <div className="d-flex mx-2 my-2">
      <div>
      <Link
          to={""}
          className="btn btn-primary btn-sm mx-1"
          style={{ backgroundColor: "#6f85d5",height:"35px",width:"36px", border:"none", borderRadius:"50%" }}
        >
          <FontAwesomeIcon icon={faDiscord} size="lg" style={{color:"white",marginBlockStart:"5px"}}/>
        </Link>
      </div>
      <div>
      <Link
          to={""}
          className="btn btn-primary btn-sm mx-1"
          style={{height:"35px",width:"36px", border:"none", borderRadius:"50%",textAlign:"center" }}
        >
          {/* <faPaperPlane className="papperplane-icon" /> */}
          <FontAwesomeIcon icon={faPaperPlane} size="lg" style={{color:"white",marginBlockStart:"5px"}}/>
        </Link>
      </div>
      <div>
      <Link
          to={""}
          className="btn btn-primary btn-sm mx-1"
          style={{ backgroundColor: "#ff3c1f",height:"35px",width:"36px", border:"none", borderRadius:"50%" }}
        >
          <FontAwesomeIcon icon={faRedditAlien} size="lg" style={{color:"white",marginBlockStart:"5px"}} />
        </Link>
      </div>
      <div>
      <Link
          to={""}
          className="btn btn-primary btn-sm mx-1"
          style={{ backgroundColor: "#1d9bf0",height:"35px",width:"36px", border:"none", borderRadius:"50%" }}
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" style={{color:"white",marginBlockStart:"5px"}}/>
        </Link>
      </div>
    </div>
  );
};

export default Socialmediaelements;
