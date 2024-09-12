import "./filter.css";
const Filters = () => {
  return (
    <div className="filter-section">
      <div className="filter-left">
        <select name="" id="">
          <option value="" selected>
            Layout
          </option>
          <option value="" selected>
            Layout
          </option>
          <option value="" selected>
            Layout
          </option>
          <option value="" selected>
            Layout
          </option>
        </select>
        <i className="fa-solid fa-gear"></i>
        <i className="fa-solid fa-question"></i>
      </div>
      <div className="filter-right">
        <div className="zoom">
          <i className="fa-solid fa-minus"></i>
          <i className="fa-solid fa-magnifying-glass-plus"></i>
          <i className="fa-solid fa-plus"></i>
        </div>
        <div className="screens">
          <i className="fa-solid fa-list"></i>
          <i className="fa-solid fa-list"></i>
          <i className="fa-solid fa-list"></i>
          <i className="fa-solid fa-list"></i>
        </div>
      </div>
    </div>
  );
};

export default Filters;
