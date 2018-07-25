import React, { Component } from "react";
import { connect } from "react-redux";
import Fader from "./Fader";
import { transitionRoute } from "../actions";
import injectSheet from "react-jss";
import HomeGridBlock from "./HomeGridBlock";
import FillerBlock from './FillerBlock'

const styles = {
  HomePage: {
    width: "80%"
  },
  gridContainer: {
    display: "grid",
    minHeight: "800px",
    gridColumnGap: "50px",
    gridRowGap: "10px",
    paddingBottom: "5%",
    gridTemplateColumns: "auto auto auto auto",
    gridTemplateRows: "auto auto auto auto auto",
    gridTemplateAreas: `
      "about about blank2 contact"
      "about about blank2 contact"
      "blank4 blank1 resume blank3"
      "reading blank1 resume blank0"
      "reading blank1 projects projects"

    `
  },
  "@media (max-width: 750px)": {
    gridContainer: {
      display: "flex",
      flexDirection: "column"
    }
  }
};

const blocks = [
  {
    id: 1,
    name: "about",
    color: "#c03221"
  },
  {
    id: 2,
    name: "contact",
    color: "#220901"
  },
  {
    id: 3,
    name: "projects",
    color: "#00cfc1"
  },
  {
    id: 4,
    name: "reading",
    color: "#5cc8ff"
  },
  {
    id: 5,
    name: "resume",
    color: "#320e3b"
  }
];
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBlock: null
    };
  }
  setActiveBlock = blockKey => {
    this.setState({ activeBlock: blockKey });
  };
  render() {
    const { classes } = this.props;
    const { activeBlock } = this.state;
    return (
      <div className={classes.HomePage}>
        <Fader>
          <div className={classes.gridContainer}>
            {blocks.map(({ id, name, color }) => (
              <HomeGridBlock
                key={id}
                isDeactivated={activeBlock && activeBlock !== id}
                id={id}
                name={name}
                color={color}
                activeBlock={activeBlock}
                setActiveBlock={this.setActiveBlock}
              />
            ))}
            <FillerBlock name="blank0" />
            <FillerBlock name="blank1" />
            <FillerBlock name="blank2" />
            <FillerBlock name="blank3" />
            <FillerBlock name="blank4" />

          </div>
        </Fader>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  transitionRoute: route => dispatch(transitionRoute(route))
});
export default connect(null, mapDispatchToProps)(injectSheet(styles)(HomePage));
