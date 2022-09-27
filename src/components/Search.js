import React from "react";
import "./Search.css";

export default function Search({ filters, handleDeleteFilter, handleClearFilters }) {
  return (
    <div className="search">
      <div className="search-tabs">
        {filters
          ? filters.map((filter) => (
              <div className="search-tab" key={filter}>
                <p>{filter}</p>
                <span onClick={() => handleDeleteFilter(filter)}>x</span>
              </div>
            ))
          : ""}
      </div>
      <p className="clear" onClick={handleClearFilters}>Clear</p>
    </div>
  );
}
