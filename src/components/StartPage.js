import React from "react";

import beepleNft from "../images/beeple_nft.jpeg";
import useNft from "../images/use_nft.jpg";
import cryptoWallets from "../images/crypto_wallets.jpg";

const StartPage = () => (
  <section className="startpage">
    <section className="startpage__box">
      {/* <p>Den ena en bild på några nft's med rubrik nft historia</p> */}
      <img src={beepleNft} alt="Beeple NFT" className="firstPage_img" />
      <p className="startpage__p--title">BAKGRUNDEN TILL NFT</p>
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
    <section className="startpage__box">
      <img
        src={cryptoWallets}
        alt="Crypto wallets for NFT"
        className="firstPage_img"
      />
      {/* En bild/länken kan handla om olika wallets */}
      <p className="startpage__p--title">
        VAD ANVÄNDS WALLETS TILL - BEHÖVER DU EN?
      </p>
      <p>
        Det finns både digitala och fysiska hårdvaruplånböcker som gör det
        säkert att skydda sina kryptovalutor och NFT's.
        <br />
        <br />
        Håll koll på vilka som finns och ifall du behöver en wallet.
      </p>
    </section>
  </section>
);

export default StartPage;
