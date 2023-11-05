import "./Navbar.css";
import aniwatchlogo from "../assets/navbar/aniwatchlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import Socialmediaelements from "../socialmediaelements/Socialmediaelements";
import Streamingelements from "../streamingelements/Streamingelements";
import Profileelements from "../profileelements/Profileelements";
import { Navbar, Nav } from "react-bootstrap";

const Navbarcomponent = () => {
  return (
    <div>
      <Navbar variant="dark" expand="lg" className="navbarstyle">
        <div>
          <button className="menuicon" type="button">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <img
              src={aniwatchlogo}
              alt="No image"
              className="aniwatchnavlogo"
            />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="searchbar">
              <form>
                <div className="navsearch">
                  <input
                    type="search"
                    className="searchinput px-2"
                    placeholder="search anime"
                  />
                  <button className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                  <button className="btn btn-secondary filterBut">
                    Filter
                  </button>
                </div>
              </form>
            </div>

            <div className="d-flex socialelements">
              <Socialmediaelements />
              <Streamingelements />
            </div>
          </Nav>
        </Navbar.Collapse>

        <Nav>
          <div>
            <Profileelements />
          </div>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navbarcomponent;
