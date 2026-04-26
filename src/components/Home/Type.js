import React from "react";
import Typewriter from "typewriter-effect";
import { SITE } from "../../data/site";

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: SITE.hero.typewriter,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
