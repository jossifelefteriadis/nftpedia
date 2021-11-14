import React from "react";
import { Link } from "react-router-dom";

const E = () => (
  <section className="words">
    <h1>E</h1>
    <br />
    <p className="letter--word">
      <Link to="/ERC-721">ERC-721</Link>
    </p>
    <p className="letter--word">
      <Link to="/ETHER">ETHER</Link>
    </p>
    <p className="letter--word">
      <Link to="/ETHERSCAN">Etherscan</Link>
    </p>
  </section>
);

export default E;
