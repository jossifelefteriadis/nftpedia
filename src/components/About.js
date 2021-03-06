import React from "react";
import { Helmet } from "react-helmet";

const About = () => (
  <section className="about">
    <Helmet>
      <title>NFTPEDIA - Din främsta NFT källa på nätet</title>
      <meta
        name="description"
        content="På NFTPEDIA har du beskrivningar på diverse NFT begrepp som är bra att hålla koll på. Vårt mål är att vara din främsta NFT källa på nätet.
            NFTPEDIA startades eftersom efterfrågan på NFT (non-fungible-token) har ökat och vi ville skapa en trovärdig källa med beskrivningar och förklaringar inom NFT-världen."
      />
    </Helmet>
    <h2 className="about__title">OM NFTPEDIA</h2>
    <p>
      NFTPEDIA skapades eftersom efterfrågan på NFT (non-fungible token) har
      ökat väldigt mycket sen början av 2021 och eftersom majoriteten av de som
      investerat/känner till begreppet/är intresserade av NFT inte har så bra
      koll på alla begrepp.
    </p>
    <p>
      Vi är en trovärdig och transparent källa, och försöker alltid förbättra
      och utöka våra beskrivningar och förklaringar inom NFT-världen.
    </p>
    <br />
    <br />
    <h2 className="about__title">VILKA ÄR VI?</h2>
    <p>
      Jag som tagit fram, och driver NFTPEDIA heter{" "}
      <a
        href="http://www.twitter.com/ElefteriadisJ"
        target="_blank"
        rel="noopener noreferrer"
        className="title--link"
      >
        Jossif Elefteriadis
      </a>{" "}
      och är en fullstack utvecklare med stort intresse inom bland annat krypto-
      och NFT-världen. Målet med NFTPEDIA är att, allt eftersom NFT's blir mer
      populära och mer användbara i vår vardag, möta det framtida behovet att
      kunna förstå och fördjupa sig inom exempelvis begreppen som finns.
      <br />
      <br />
      Vill du bidra till att förbättra ett begrepps beskrivning, eller saknar du
      en term? Hör gärna av dig via{" "}
      <a
        href="http://www.twitter.com/ElefteriadisJ"
        target="_blank"
        rel="noopener noreferrer"
        className="title--link"
      >
        twitter
      </a>{" "}
      så ser vi till att det kommer med på hemsidan.
    </p>
  </section>
);

export default About;
