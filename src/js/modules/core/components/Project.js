import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import injectSheet from "react-jss";

const styles = {
  Project: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  description: {
    padding: "40px",
    maxWidth: "600px"
  },
  image: {
    width: "90%",
    height: "auto",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.2)"
  },
  links: {
    display: "flex",
    flexDirection: "column",
  },
  linksHeader: {
    margin: "0",
    marginTop: "40px"
  },
  "@media (max-width 1300px)": {
    content: {
      flexWrap: "wrap"
    }
  },
  "@media (max-width: 750px)": {
    content: {
      flexDirection: "column"
    },
    name: {
      padding: "10px",
      fontSize: "1.5em"
    }
  }
};

const Project = ({ classes, project }) => {
  return (
    <div className={classes.Project}>
      <h1 className={classes.name}> {project.name} </h1>
      <div className={classes.content}>
        <img className={classes.image} src={project.image} />
        <div className={classes.description}>
          {project.description}
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
