import React from "react";
import { Link } from "react-router-dom";

const D = () => (
  <section className="words">
    <h1>D</h1>
    <br />
    <p className="letter--word">
      <Link to="/decentraland">DECENTRALAND</Link>
    </p>
    <p className="letter--word">
      <Link to="/decentralized">DECENTRALIZED</Link>
    </p>
    <p className="letter--word">
      <Link to="/diamond-hands">DIAMON HANDS</Link>
    </p>
    <p className="letter--word">
      <Link to="/drop">DROP</Link>
    </p>
    <p className="letter--word">
      <Link to="/dune-analytics">DUNE ANALYTICS</Link>
    </p>
  </section>
);

export default D;
