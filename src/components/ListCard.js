import React from "react";
import "./ListCard.css";
import Tab from "./Tab";

export default function Card({
  job: {
  logo,
  company,
  position,
  postedAt,
  contract,
  location,
  languages,
  isNew,
  featured,
  role,
  level,
  tools,
  },
  handleTabClick
}) {

  const tags = [role, level];

  if (tools) {
    tags.push(...tools);
  }

  if (languages) {
    tags.push(...languages);
  }

  return (
    <div className="container">
      <div className="display-image">
        <img src={logo} alt="img" />
      </div>
      <div className={featured ? "card card-border" : "card"}>
        <div className="about">
          <div className="heading">
            <h1 className="card-header">{company}</h1>
            <div className="heading-tags">
              {isNew && <Tab className="tag" label="NEW!" />}
              {featured && <Tab className=" tag featured" label="FEATURED" />}
            </div>
          </div>
          <h2 className="sub-header">{position}</h2>
          <ul className="details">
            {postedAt}
            <li>{contract}</li>
            <li>{location}</li>
          </ul>
        </div>
        <hr />
        <div className="filter-tabs">
          <div className="tabs">
            {tags
              ? tags.map((tag) => (
                  <Tab
                    key={tag}
                    label={tag}
                    className="tab"
                    handleTabClick={() => handleTabClick(tag)}
                  />
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
