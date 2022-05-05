import React from "react";
import "./loading.scss";

function Loader({ light, center }) {
  return (
    <div className={`loader ${light ? "light" : ""} ${center ? "center" : ""}`}>
    </div>
  );
}

export default Loader;
