import React, { useContext } from "react";
import { DIV, H1 } from "./AboutDesign";
import { LanguageContext } from "./language/LanguageContext";
import dictionary from "./language/Dictionary";

export default function About() {
  const [language] = useContext(LanguageContext);

  return (
    <DIV>
      <H1>Cocktail Land</H1>
      <p>{dictionary.aboutText[language]}</p>
    </DIV>
  );
}
