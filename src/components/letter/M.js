import React from "react";
import { Link } from "react-router-dom";

const M = () => (
  <section className="words">
    <h1>M</h1>
    <br />
    <p className="letter--word">
      <Link to="/MAINNET">MAINNET</Link>
    </p>
    <p className="letter--word">
      <Link to="/MARKETPLACES">MARKETPLACES</Link>
    </p>
    <p className="letter--word">
      <Link to="/METAMASK">METAMASK</Link>
    </p>
    <p className="letter--word">
      <Link to="/METAVERSE">METAVERSE</Link>
    </p>
    <p className="letter--word">
      <Link to="/MINT">MINT</Link>
    </p>
    <p className="letter--word">
      <Link to="/MOD">MOD</Link>
    </p>
  </section>
);

export default M;
