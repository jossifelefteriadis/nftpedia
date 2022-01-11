import React from "react";
import { Link } from "react-router-dom";

const H = () => (
  <section className="words">
    <br />
    <br />
    <h1>H</h1>
    <br />
    <p className="letter--word">
      <Link to="/hash">HASH</Link>
    </p>
    <p className="letter--word">
      <Link to="/hodl">HODL</Link>
    </p>
  </section>
);

export default H;
