import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  ProjectsPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "90%",
    paddingBottom: "20px",
  },
  "@media (max-width: 800px)": {
    ProjectsPage: {
      alignItems: "center",
    },
  },
  content: {
    maxWidth: "500px",
  },
});

const ProjectsPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.ProjectsPage}>
      <div className={classes.content}>
        <p>
          This used to be a fancy page that I put a lot of work into, but that's
          too hard to maintain. Instead here's a list of recent projects.
        </p>
        <div>
          <a href="https://github.com/nicholaslyang/saber">Saber </a> &mdash; A
          Programming Language Implemented in Rust{" "}
        </div>
        <div>
          <a href="https://torchnyu.com/">Torch </a> &mdash; An Organization For
          Improving NYU CS
        </div>
        <div>
          <a href="https://github.com/NicholasLYang/dancing-links">
            Dancing Links
          </a>{" "}
          &mdash; A quick implementation of Knuth's Algorithm X with dancing
          links
        </div>
        <div>
          <a href="https://github.com/nicholaslyang/blog">Blog</a> &mdash; My
          blog, Horribly Underqualified
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
