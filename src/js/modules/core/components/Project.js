import React from "react"
import injectSheet from "react-jss"

const styles = {
  image: {
    "&:hover": {
      opacity: "0.5",
      transition: "opacity 0.5s"
    },
    "&:hover $imageText": {
      transition: "opacity 0.5s",
      opacity: "1"
    }
  },
  imageText: {
    opacity: "0",
    color: "black",
    position: "absolute",
    top: "65%",
    left: "35%",
    transform: "translate(-50%, -50%)"
  }
}
const Project = ({ classes, image }) => (
  <div className={classes.image}>
    <img src={image} />
    <h1 className={classes.imageText}> Fashion Tree </h1>
  </div>
)

export default injectSheet(styles)(Project);