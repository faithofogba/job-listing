import React from "react";
import "./Main.css";
import Search from "./Search";
import data from "../config/data.json";
import JobList from "./JobList";

export default function Main() {
  const [jobs, setJobs] = React.useState([]);
  const [filters, setFilters] = React.useState([]);

  React.useEffect(() => setJobs(data), []);

  const filterFunc = ({ role, level, tools, languages }) => {
    // console.log("length", filters)
    if (filters.length === 0) {
      return true;
    }
    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }
    return tags.some((tag) => filters.includes(tag));
  };

  const handleTabClick = (tag) => {
    if(filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const handleDeleteFilter = (selectedFilter) => {
    setFilters(filters.filter((filterTab) => filterTab !== selectedFilter));
  };

  const handleClearFilters = () => {
    setFilters([]);
  }

  const filterJobs = jobs.filter(filterFunc);

  return (
    <main className="main">
      {filters.length > 0 && <Search filters={filters} handleDeleteFilter={handleDeleteFilter} handleClearFilters={handleClearFilters} />}
      {jobs.length === 0 ? (
        <p>Jobs loading </p>
      ) : (
        <JobList filterJobs={filterJobs} handleTabClick={handleTabClick} />
      )}
    </main>
  );
}
