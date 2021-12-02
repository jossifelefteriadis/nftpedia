import React from "react";
import { Link } from "react-router-dom";

const E = () => (
  <section className="words">
    <h1>E</h1>
    <br />
    <p className="letter--word">
      <Link to="/erc-721">ERC-721</Link>
    </p>
    <p className="letter--word">
      <Link to="/ether">ETHER</Link>
    </p>
    <p className="letter--word">
      <Link to="/etherscan">ETHERSCAN</Link>
    </p>
  </section>
);

export default E;
