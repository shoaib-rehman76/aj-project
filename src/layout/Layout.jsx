import Navbar from "../components/navbar/Navbar";
import Sidbar from "../components/sidbar/Sidbar";
import Home from "../pages/home-page/Home";
import "./layout.css";
const Layout = () => {
  return (
    <div className="layout">
      <div className="left">
        <Sidbar />
      </div>
      <div className="right">
        <Navbar />
        <div className="right-inner">
          <Home/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
