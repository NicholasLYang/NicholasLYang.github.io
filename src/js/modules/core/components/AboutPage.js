import React from "react";
import injectSheet from "react-jss";
import Fader from "./Fader";
import Link from "./Link";

const styles = {
  about: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    maxWidth: "500px",
    paddingDown: "5%"
  },
  headshotContainer: {
    flex: "1",
    flexShrink: "2",
    maxWidth: "100%",
    minWidth: "50%"
  },
  headshot: {
    maxWidth: "100%",
    objectFit: "contain"
  },
  "@media (max-width: 500px)": {
    title: {
      fontSize: "2em"
    },
    about: {
      paddingLeft: "50px",
      paddingRight: "50px"
    }
  }
};

const AboutPage = ({ classes }) => (
  <Fader>
    <div className={classes.about}>
      <h2 className={classes.title}> About </h2>
      <div className={classes.headshotContainer}>
        <img className={classes.headshot} src="/images/Headshot.jpg" />
      </div>
      <h3> I am... </h3>
      <p>A student at NYU, studying Mathematics and Computer Science.</p>

      <p>
        A native New Yorker. I attended Stuyvesant High School and graduated in
        2016.
      </p>

      <p>
        A developer with experience in JavaScript (ES6), React, Redux, Ruby on
        Rails, C++, Java, Python and{" "}
        <a href="https://github.com/NicholasLYang">more</a>.
      </p>

      <p>
        A programming language nerd. I'm obsessed with learning new programming
        languages, such as Rust, Haskell, OCaml and Scheme. My goal is to design
        my own language sometime soon.
      </p>
      <p>
        A food lover. I love searching out good, inexpensive food. I also love
        cooking and learning how to make new dishes.
      </p>

      <p>
        A tutor in Mathematics, Physics, and Computer Science. {" "}
        <Link to="/contact">Contact me</Link> if interested
      </p>
      <p>
        A film lover. Some of my favorite films include Badlannds, Ida, The
        Third Man and Yojimbo.
      </p>

      <p>
        An avid traveler. I've been to 20 countries, and hope to go to many
        more.
      </p>
    </div>
  </Fader>
);

export default injectSheet(styles)(AboutPage);
