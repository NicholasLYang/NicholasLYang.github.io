import React, { Component } from "react";
import injectSheet from "react-jss";
import Fader from "./Fader";
import { connect } from "react-redux";

const styles = {
  about: {
    maxWidth: "500px",
    padding: "50px"
  },
  title: {
    fontFamily: "'Source Serif Pro', serif",
    fontSize: "3em"
  },
  '@media (max-width: 500px)': {
    title: {
      fontSize: "2em"
    }
  }
};

const AboutPage = ({ classes }) =>
  <Fader>
    <div className={classes.about}>
      <h2 className={classes.title}> About </h2>
      <h3> I am... </h3>
      <p>A student at NYU, studying Mathematics and Computer Science.</p>

      <p>
        A native New Yorker. I attended Stuyvesant High School and graduated in
        2016.
      </p>

      <p>
        A developer with experience in React, Redux, Ruby on Rails, C++, Java,
        Python and <a href="https://github.com/NicholasLYang">more </a>
      </p>

      <p>A tutor in Mathematics, Physics, and Computer Science.</p>
      <p>
        A film lover. Some of my favorite films include Badlands, Ida, The Third
        Man and Yojimbo.
      </p>

      <p>
        Obsessed with food. I love searching out good, inexpensive food.
        I also love cooking and learning how to make new dishes
      </p>

      <p>
        An avid traveler. I've been to 18 countries, and hope to go to many more
      </p>
    </div>
  </Fader>;

const mapStateToProps = state => ({
  isFading: state.core.isFading
});

export default connect(mapStateToProps)(injectSheet(styles)(AboutPage));
