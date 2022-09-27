import React from "react";
import "./Tab.css";

export default function Tab({ label, className, handleTabClick }) {
  return <div className={className} onClick={handleTabClick}>{label}</div>;
}
