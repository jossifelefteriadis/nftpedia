import React from "react";
import { Link } from "react-router-dom";

const R = () => (
  <section className="words">
    <h1>R</h1>
    <br />
    <p className="letter--word">
      <Link to="/RARIBLE">RARIBLE</Link>
    </p>
    <p className="letter--word">
      <Link to="/RARITY-TOOLS">RARITY TOOLS</Link>
    </p>
    <p className="letter--word">
      <Link to="/RINKEBY">RINKEBY</Link>
    </p>
    <p className="letter--word">
      <Link to="/ROPSTEN">ROPSTEN</Link>
    </p>
    <p className="letter--word">
      <Link to="/RUG-PULL">RUG PULL</Link>
    </p>
  </section>
);

export default R;
