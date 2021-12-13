import React from "react";
import { Link } from "react-router-dom";

const R = () => (
  <section className="words">
    <h1>R</h1>
    <br />
    <p className="letter--word">
      <Link to="/rarible">RARIBLE</Link>
    </p>
    <p className="letter--word">
      <Link to="/rarity-tools">RARITY TOOLS</Link>
    </p>
    <p className="letter--word">
      <Link to="/rinkeby">RINKEBY</Link>
    </p>
    <p className="letter--word">
      <Link to="/ropsten">ROPSTEN</Link>
    </p>
    <p className="letter--word">
      <Link to="/rug-pull">RUG PULL</Link>
    </p>
  </section>
);

export default R;
