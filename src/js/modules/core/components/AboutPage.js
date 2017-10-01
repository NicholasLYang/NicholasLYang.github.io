import React, { Component } from "react";
import injectSheet from "react-jss";

const styles = {
  about: {
    opacity: props => props.opacity,
    transition: "opacity 5s"
  }
};

const About = ({ classes }) =>
  <div className={classes.about}>This is an about page</div>;

const StyledAbout = injectSheet(styles)(About);

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounting: true
    };
  }
  componentDidMount() {
    this.setState({ isMounting: false });
  }

  render() {
    console.log(this.state.isMounting);
    const opacity = this.state.isMounting ? 0 : 1;
    console.log(opacity);
    return <StyledAbout opacity={opacity} />;
  }
}

export default AboutPage;
