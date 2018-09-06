import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import injectSheet from "react-jss";

const styles = {
  Project: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "5%",
    paddingBottom: "100px"
  },
  name: {
    fontSize: "2em",
    fontWeight: "400",
    lineHeight: "1.3em",
    paddingBottom: "40px"
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  text: {
    padding: "40px",
    maxWidth: "40%"
  },
  image: {
    flexGrow: "2",
    display: "block",
    width: "auto",
    height: "auto",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.2)"
  },
  links: {
    display: "flex",
    flexDirection: "column"
  },
  linksHeader: {
    margin: "0",
    marginTop: "40px"
  },
  "@media (max-width: 1300px)": {
    image: {
      width: "80%"
    },
    content: {
      flexDirection: "column"
    },
    text: {
      display: "flex",
      maxWidth: "70%"
    },
    links: {
      paddingLeft: "40px"
    },
    description: {
      width: "80%"
    }
  },
  "@media (max-width: 750px)": {
    name: {
      padding: "10px",
      fontSize: "1.5em"
    },
    text: {
      maxWidth: "80%"
    },
    content: {
      alignItems: "center"
    }
  }
};

const Project = ({ classes, project }) => {
  return (
    <div className={classes.Project}>
      <h1 className={classes.name}> {project.name} </h1>
      <div className={classes.content}>
        <img className={classes.image} src={project.image} />
        <div className={classes.text}>
          <div className={classes.description}>
          {project.description}
          </div>
          <div className={classes.links}>
            <h2 className={classes.linksHeader}> Links </h2>
            <ul>
              {project.urls.map(({ name, url }) => (
                <li>
                  <a href={url}> {name} </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  project: state.core.projects[props.match.params.slug]
});

export default compose(connect(mapStateToProps), injectSheet(styles))(Project);
