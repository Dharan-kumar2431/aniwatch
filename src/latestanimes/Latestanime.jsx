import Allanimes from "../allanimes/Allanimes";
import Latestanimecard from "../latestanimecard/Latestanimecard";
import "./Latestanime.css";
import { Latestanimelist } from "../shared/latestanime/Latestanimelist";
import { Link } from "react-router-dom";
import Toptenanimes from "../top10animes/Toptenanimes";
import Animegenres from "../animegenres/Animegenres";
import Animepaganation from "../animepaganation/Animepaganation";

const Latestanimes = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-9 col-sm-12">
          <div>
            <h2 className="latestanimeheading">TV Series Anime</h2>
          </div>
          <Latestanimecard data={Latestanimelist} />
          <Allanimes />
          <div>
            <Animepaganation />
          </div>
        </div>
        <div className="col-md-3 col-sm-12 toptenanimes">
          <div className="row top10">
            <div className="col-md-4">
              <h2
                style={{
                  color: "#ffdd95",
                  fontSize: "22px",
                  fontWeight: "bolder",
                }}
              >
                Top 10
              </h2>
            </div>
            <div className="col-md-8">
              <Link to={""} style={{ textDecoration: "none" }}>
                <div className="mb-2">
                  <div className="btn-group btn-toggle">
                    <button className="timeperiodtoggle todaytimeperiod">
                      Today
                    </button>
                    <button
                      className="timeperiodtoggle weektimeperiod"
                      style={{
                        backgroundColor: "rgba(255,255,255,.1)",
                        color: "white",
                      }}
                    >
                      Week
                    </button>
                    <button
                      className="timeperiodtoggle monthtimeperiod"
                      style={{
                        backgroundColor: "rgba(255,255,255,.1)",
                        color: "white",
                      }}
                    >
                      Month
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="mt-3">
              <Toptenanimes />
            </div>
            <div>
              <Animegenres />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latestanimes;
