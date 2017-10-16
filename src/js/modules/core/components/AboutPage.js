import React from "react";
import injectSheet from "react-jss";
import Fader from "./Fader";
import { connect } from "react-redux";

const styles = {
  about: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    maxWidth: "500px",
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
  title: {
    fontSize: "3em",
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

const AboutPage = ({ classes }) =>
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

      <p>A tutor in Mathematics, Physics, and Computer Science.</p>
      <p>
        A film lover. Some of my favorite films include Badlands, Ida, The Third
        Man and Yojimbo.
      </p>

      <p>
        Obsessed with food. I love searching out good, inexpensive food. I also
        love cooking and learning how to make new dishes.
      </p>

      <p>
        An avid traveler. I've been to 18 countries, and hope to go to many more.
      </p>
    </div>
  </Fader>;

const mapStateToProps = state => ({
  isFading: state.core.isFading
});

export default connect(mapStateToProps)(injectSheet(styles)(AboutPage));
