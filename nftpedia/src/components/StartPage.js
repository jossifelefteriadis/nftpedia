import React from "react";

import beepleNft from "../images/beeple_nft.jpeg";
import useNft from "../images/use_nft.jpg";

const StartPage = () => (
  <section className="startpage">
    <section className="startpage__box">
      {/* <p>Den ena en bild på några nft's med rubrik nft historia</p> */}
      <img src={beepleNft} alt="Beeple NFT" className="firstPage_img" />
      <p className="startpage__p--title">HISTORIAN BAKOM NFT</p>
      <p className="startpage__p--description">
        Hur och när startade sensationen kring NFT (non-fungible token), och
        varför har det fått en så stor spridning att både kända investerare och
        andra förmögna personer valt att ge sig in i marknaden.
      </p>
    </section>
    <section className="startpage__box">
      {/* En bild/länken kan handla om 'varför nft' och olika användningsområden
        (pfp, play earn, yatch club, osv) */}
      <img
        src={useNft}
        alt="HOW CAN AN NFT BE USED?"
        className="firstPage_img"
      />
      <p className="startpage__p--title">VAD HAR NFT FÖR ANVÄNDNINGSOMRÅDEN?</p>
      <p>
        NFT's kan har flera olika användningsområden, funktioner, och syften -
        beroendes på skaparens mål med sitt NFT. Varför handlar man NFT's, och
        vad har de för olika användningsområden?
      </p>
    </section>
    <section className="startpage__box">3</section>
  </section>
);

export default StartPage;
