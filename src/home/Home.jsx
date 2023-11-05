import Latestanimes from "../latestanimes/Latestanime";
import Recommendationanime from "../recommendationanimeelements/Recommendationanime";
import "./Home.css";
import aniwatch from "../assets/navbar/aniwatchlogo.png";
import Socialmediaelements from "../socialmediaelements/Socialmediaelements";
import Navbarcomponent from "../nav_bar/Navbar";

const Home = () => {
  return (
    <div className="homecomponent">
      <div className="homenavbardiv">
        <Navbarcomponent />
      </div>
      <div>
        <Recommendationanime />
      </div>
      <div className="animecontent container-fluid">
        <div>
          <Latestanimes />
        </div>
      </div>

      <div className="d-flex endpagesocialmedia ">
        <div className="endpagelogo d-md-flex d-sm-none d-none">
          <img src={aniwatch} alt="No_Image" width="150px" />
        </div>
        <div>
          <Socialmediaelements />
        </div>
      </div>
      <div className="d-flex pb-5 d-md-flex d-sm-none d-none">
        <h3 className="atozlisthead">A-Z LIST</h3>
        <p className="atozlisttext">Searching anime order by alphabet name A to Z.</p>
      </div>
    </div>
  );
};

export default Home;
