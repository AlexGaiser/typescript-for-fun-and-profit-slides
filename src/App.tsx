import React, { useState } from "react";
import logo from "./logo.svg";
import { css } from "@emotion/core";


import headache from './assets/meme_headache.jpg'
import evan from './assets/evangelist_ts.png'
import post from './assets/post_ts.png'
import buzz from './assets/buzz.jpeg'
import backgroundTs from './assets/background_ts.png'
import "./App.css";
import Slide from "./components/Slide";
import Meme from "./components/Meme";




const App = () => {
  const [index, setIndex] = useState<number>(0);

  const setSlide = (i: number, slides: JSX.Element[]): void => {
    setIndex(i % slides.length);
  };

  const next = () => {
    setSlide(index + 1, slides);
  };

  const prev = () => {
    setSlide(index - 1, slides);
  };

  const slides: JSX.Element[] = [
    <img src={backgroundTs} css={css`
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    `} 
    alt='background-image'
    />,

    <Slide
    styles={[css`
    justify-content: center
  `]}
      title="TypeScript for Fun and Profit"
      subtitle="Welcome Future TypeScript Afficionados"
    />,
    <Slide
      title="What is TypeScript?"
      subtitle=""
      bullets={
        [
          "TypeScript is a superset of JavaScript developed and maintained by Microsoft",
          "It gives static typing to JavaScript",
          "It transcompiles into JavaScript at runtime",
          "It was specifically developed to combat deficiencies in JavaScript at scale",
        ]
      }
    />,
    <Meme image={headache} />,

    <Slide
    title="Why you should use TypeScript"
    subtitle=""
    bullets={
      [
        "TypeScript will give you precompile errors, saving you time",
        "It gives you better code-completion if you are using VSCode",
        "It gives you more information on every object in your code",
        "It forces you to plan ahead, saving you a lot of time in the long run",
        "It makes your code much cleaner and gets it closer to being truly self-documenting",
      ]
    }
  />,
  <Slide
  title="Why you should use TypeScript Cont..."
  subtitle=""
  bullets={
    [
      "It makes you more employable",
      "46% pf NPM users state that they are already using TypeScript",
      "If you are only familiar with dynamically typed languages, it teaches you a lot of essential concepts",
      "Everyone is using it, a lot of companies are update their code-base to use it",
      "Many emerging technologies are using it",
      "IT'S FUN!"
    ]
  }
/>,
<Slide
styles={[css`
justify-content: center
`]}

    title="Here's an example: "
    subtitle=""
   
  />,
    <Slide
    title="How Can you use TypeScript?"
    subtitle="(It's Really easy.)"
    bullets={
      [
        "For React: 'npm install --save typescript'",
        "For Node: 'npm install --save typescript' (plus 5 min of configuration)" 
      ]
    }
  />,
  <Slide
styles={[css`
justify-content: center
`]}

    title="Here's another example: "
    subtitle=""
   
  />,
  <Slide
  title="Why you shouldn't use TypeScript"
  subtitle=""
  bullets={
    [
      "It makes JavaScript more Object-Oriented",
      "It is slower to write",
      "I have to train new people to use it or I have to learn it myself",
      "It is one more dependency to maintain",
      "TypeScript is still JavaScript",
      "TypeScript is NOT JavaScript"
    ]
  }
/>,
  <Meme image={buzz} />,
    <Slide
      styles={[css`
        justify-content: center
      `]}
      title="Who REALLY Uses TypeScrpt?"
      subtitle="(Everybody)"
      bullets={[
        "46% of NPM users are already using TypeScript",
        "2325 companies report using TypeScript in their projects, including medium.com, Slack, and N26",
        "Everyone who uses Angular",
        "People Writing WebAssebly using AssemblyScript",
        "People writing Smart Contracts using Solidity"
      ]}
    />,
    <Slide
    title="Questions?"
    subtitle={''}
    bullets={[
      "alexcgaiser@gmail.com",
      "linkedin.com/in/alexander-gaiser/",
      "github.com/AlexGaiser",
      "Yell if you see me on the street"
    ]}
  />,
  <Slide
  styles={[css`
  justify-content: center
`]}
  title="Thank You"
  subtitle={''}
  bullets={[
  ]}
/>,
  ];

  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
      `}
    >
      <div
        css={css`
          height: 100vh;
          width: 100vw;
          position: absolute;
          display: flex;
        `}
      >
        <div
          onClick={prev}
          css={css`
            height: 100vh;
            width: 50vw;
            z-index: 1000;
          `}
        ></div>
        <div
          onClick={next}
          css={css`
            height: 100vh;
            width: 50vw;
            z-index: 1000;
          `}
        ></div>
      </div>
      {slides[index]}
    </div>
  );
};

export default App;
