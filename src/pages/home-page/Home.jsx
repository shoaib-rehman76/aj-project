import Filters from "../../components/filters/Filters";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <Filters />
      <div className="home-inner-layout">
        <div className="inner-left">
          <div>
            <div className="inner-section-1">
              <h5>IMPORTANT SCENES</h5>
              <div className="important-list">
                <div>
                  <i className="fa-solid fa-list"></i>
                  <span>1.INT. CONFERENCE ROOM-DAY</span>
                </div>
                <small>9</small>
              </div>
            </div>
            <div className="inner-section-2">
              <h5>custom shot lists</h5>
              <div className="custom-list">
                <div>
                  <i className="fa-solid fa-list"></i>
                  <span> &quot;The Pen &quot;.Chase Scene</span>
                </div>
                <small>9</small>
              </div>
            </div>
          </div>
          <div className="inner-section-3">
            <hr />
            <button>+ New List </button>
          </div>
        </div>
        <div className="inner-right">
          <div className="content-topper">
            <div className="topper-left">
              <span>
                <i className="fa-solid fa-gear"></i> &quot;The Pen &quot; -
                Chase Scene
              </span>
              <small>12 SHOTS</small>
            </div>
            <div className="topper-right">
              <button>+ New List </button>
              <i className="fa-solid fa-camera-retro"></i>
              <i className="fa-solid fa-camera-retro"></i>
              <i className="fa-solid fa-link"></i>
            </div>
          </div>
          <hr />
          <div className="inner-card-wrapper">
            {Array.from({ length: 10 }, (_, item) => item).map((el) => (
              <div key={el} className="card">
                <div className="card-header">
                  <span>Scene &nbsp; # &nbsp; &gt; Shot 1</span>
                  <div className="card-img">
                    <img
                      src="https://images.unsplash.com/photo-1486829060564-50dae90dccd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGhlaWYlMjBydW5uaW5nfGVufDB8fDB8fHww"
                      alt=""
                    />
                  </div>
                  <div className="card-content">
                    <p>WE - Eye Level - Static - Hand Held</p>
                  </div>
                  <hr />
                  <div className="card-footer">
                    <small>Intern darts off</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
