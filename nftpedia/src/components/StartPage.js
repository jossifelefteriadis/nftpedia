import React from "react";

import beepleNft from "../images/beeple_nft.jpeg";

const StartPage = () => (
  <section className="startpage">
    <section className="startpage__box">
      {/* <p>Den ena en bild på några nft's med rubrik nft historia</p> */}
      <img src={beepleNft} alt="TEAM WHALE" className="firstPage_img" />
      <p className="startpage__p--title">HISTORIAN BAKOM NFT</p>
      <p className="startpage__p--description">
        Hur och när startade sensationen kring NFT (non-fungible token), och
        varför har det fått en så stor spridning att både kända investerare och
        andra förmögna personer valt att ge sig in i marknaden.
      </p>
    </section>
    <section className="startpage__box">
      2
      <p>
        En bild/länken kan handla om 'varför nft' och olika användningsområden
        (pfp, play earn, yatch club, osv)
      </p>
    </section>
    <section className="startpage__box">3</section>
  </section>
);

export default StartPage;
