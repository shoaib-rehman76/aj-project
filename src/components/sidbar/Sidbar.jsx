import "./sidbar.css";
const Sidbar = () => {
  return (
    <div className="sidbar">
      <div className="sidbar-header">
        <div className="logo">
          <a href="">
            <i className="fa-regular fa-comment-dots"></i>
          </a>
        </div>

        <ul className="sidbar-menu">
          <li>
            <a href="#">
              <i className="fas fa-long-arrow-alt-left"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-airbnb"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-bars"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-galactic-republic"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-sliders-h"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="far fa-map"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <ul>
          <li>
            <a className="sidbar-menu" href="">
              <i className="fa-regular fa-comment-dots"></i>
            </a>
          </li>
        </ul>
        <p>
          Made By
          <br />
          Team
        </p>
      </div>
    </div>
  );
};

export default Sidbar;
