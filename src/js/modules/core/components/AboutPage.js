import React, { Component } from "react";
import injectSheet from "react-jss";
import Fader from "./Fader";
import { connect } from "react-redux";

const styles = {
  about: {
    maxWidth: "500px"
  }
};

const AboutPage = ({ classes }) =>
  <Fader>
    <div className={classes.about}>
      <h2> About </h2>
      <h3> I am... </h3>
      <p>A student at NYU, studying Mathematics and Computer Science.</p>

      <p>
        A native New Yorker. I went to Stuyvesant High School and graduated in
        2016.
      </p>

      <p>
        A developer with experience in React, Redux, Ruby on Rails, C++, Java,
        Python and <a href="https://github.com/NicholasLYang">more </a>
      </p>

      <p>
        A tutor in Mathematics, Physics, and Computer Science.
      </p>
    </div>
  </Fader>;

const mapStateToProps = state => ({
  isFading: state.core.isFading
});

export default connect(mapStateToProps)(injectSheet(styles)(AboutPage));
