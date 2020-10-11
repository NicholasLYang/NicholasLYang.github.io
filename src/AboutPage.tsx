import React from "react";
import { createUseStyles } from "react-jss";
import headshot from "./headshot.jpeg";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  about: {
    display: "flex",
    fontSize: "1.1em",
    lineHeight: "1.3em",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    maxWidth: "500px",
    paddingDown: "5%",
  },
  headshotContainer: {
    flex: "1",
      display: "flex",
      justifyContent: "center"
  },
  headshot: {
    maxWidth: "min(400px, 75vw)",
    objectFit: "contain",
  },
  title: {
    fontWeight: "400",
    fontSize: "2em",
  },
  iam: {
    fontWeight: "400",
  },
  "@media (max-width: 500px)": {
    about: {
      paddingLeft: "50px",
      paddingRight: "50px",
    },
  },
});

const AboutPage: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <h2 className={classes.title}> About </h2>
      <div className={classes.headshotContainer}>
        <img alt="Me!" className={classes.headshot} src={headshot} />
      </div>
      <h3 className={classes.iam}> I am... </h3>
      <p>A student at NYU, studying Mathematics and Computer Science.</p>

      <p>
        A native New Yorker. I attended Stuyvesant High School and graduated in
        2016.
      </p>
      <p>
        A developer with experience in JavaScript (ES6), React, Redux, Ruby on
        Rails, TypeScript, Rust, and{" "}
        <a href="https://github.com/NicholasLYang">more</a>. I will be interning
        at Cloudflare in the fall.
      </p>

      <p>
        A programming language nerd. I'm obsessed with learning new programming
        languages, such as Rust, Haskell, OCaml and Scheme. I've been tinkering
        with my own programming language,{" "}
        <a href="https://github.com/NicholasLYang/saber"> Saber </a>
      </p>
      <p>
        A food lover. I love searching out good, inexpensive food. I also love
        cooking and learning how to make new dishes.
      </p>

      <p>
        A tutor in Mathematics, Physics, and Computer Science.{" "}
        <Link to="/contact">Contact me</Link> if interested
      </p>
      <p>
        A film lover. Some of my favorite films include Badlands, Ida, The Third
        Man and Pather Panchali.
      </p>

      <p>
        An avid traveler. I've been to 21 countries, and hope to go to many
        more.
      </p>
    </div>
  );
};

export default AboutPage;
