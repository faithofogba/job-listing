import React from "react";
import "./JobList.css";
import Card from "./ListCard";

export default function JobList({filterJobs, handleTabClick}) {

  return (
    <div className="job-list">
      {filterJobs.map((job) => (
          <Card job={job} key={job.id} handleTabClick={handleTabClick} />
        ))}
    </div>
  );
}
