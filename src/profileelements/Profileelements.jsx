import './Profileelements.css'
import profileimg from '../assets/navbar/profile.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Profileelements = () => {
    return(
        <div className="d-flex">
            <div>
            <button className="notifacation-button">
              <FontAwesomeIcon icon={faBell} color="white" size="lg" className="notifaction-icon" />
            </button>
            </div>
            <div>
            <button className="profilebutton mx-4">
              <img src={profileimg} alt="No image" className="profileimg"/>
            </button>
            </div>            
        </div>
    )
}

export default Profileelements;