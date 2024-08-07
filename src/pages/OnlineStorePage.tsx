import { useState } from "react";

const OnlineStorePage = () => {
  const [view, setView] = useState("grid");

  const showTableView = () => setView("table");
  const showGridView = () => setView("grid");
  return (
    <div className="page-container">
      <h1 className="page-title">Products</h1>

      <div className="filters-panel">
        <span>search Component</span>
        <div className="list-view-controls">
          <i
            className={`bi bi-list ${view === "table" ? "active" : ""}`}
            onClick={showTableView}
          ></i>
          <i
            className={`bi bi-grid ${view === "grid" ? "active" : ""}`}
            onClick={showGridView}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default OnlineStorePage;
