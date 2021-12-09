import React from "react";
import { Link } from "react-router-dom";

const M = () => (
  <section className="words">
    <h1>M</h1>
    <br />
    <p className="letter--word">
      <Link to="/mainnet">MAINNET</Link>
    </p>
    <p className="letter--word">
      <Link to="/marketplace">MARKETPLACES</Link>
    </p>
    <p className="letter--word">
      <Link to="/metamask">METAMASK</Link>
    </p>
    <p className="letter--word">
      <Link to="/metaverse">METAVERSE</Link>
    </p>
    <p className="letter--word">
      <Link to="/mint">MINT</Link>
    </p>
    <p className="letter--word">
      <Link to="/mod">MOD</Link>
    </p>
  </section>
);

export default M;
