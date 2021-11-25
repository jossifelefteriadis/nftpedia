import React from "react";

const Blockchain = () => (
  <section className="word-description-container">
    <h1>Blockchain</h1>
    <p>
      Blockchain, eller blockkedja, är en distribuerad databas som delas bland
      många nodes (datorer). Blockchain lagrar data digitalt och är känt för sin
      säkerhet och tillförlitlighet.
      <br />I blockchain så lagras data i blocks, där varje{" "}
      <a href="https://www.nftpedia.se/block">block</a> har specifik kapacitet,
      och när den är nådd så stängs det och kopplas till det föregående blocket
      - därav bildas en kedja.
      <br />
      <br />
      Att lagring och kontroll sker av flera nodes istället för en central
      databas kallas för decentralized.
      <br />
      <br />
      Bitcoin's blockchain är den mest populära, men det finns tusentals andra
      och oftast är de skapade på olika sätt.
    </p>
  </section>
);

export default Blockchain;
