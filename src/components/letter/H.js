import React from "react";
import { Link } from "react-router-dom";

const H = () => (
  <section className="words">
    <h1>H</h1>
    <br />
    <p className="letter--word">
      <Link to="/HASH">HASH</Link>
    </p>
    <p className="letter--word">
      <Link to="/HODL">HODL</Link>
    </p>
  </section>
);

export default H;
