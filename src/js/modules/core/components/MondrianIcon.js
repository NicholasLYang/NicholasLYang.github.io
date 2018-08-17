import React from "react";
import injectSheet from "react-jss"

const styles = {
  Mondrian: {
    paddingLeft: "7px"
  }
}

const Mondrian = ({ classes, ...props }) => (
  <svg className={classes.Mondrian} width={40} height={40} viewBox="0 0 400 400" {...props}>
    <path fill="#FFD44A" d="M174 209h48.5v86.5H174z" />
    <path fill="#064F84" d="M301.5 213.5h61V298h-61z" />
    <path fill="red" d="M30.5 32.5h140V151h-140z" />
    <path d="M219.125 32.5h5.25v334h-5.25zM168.5 32.5h8.5v334h-8.5z" />
    <path d="M30.5 149h332v6.5h-332zM30.5 209h332v6.5h-332zM30.5 292h332v6.5h-332z" />
    <path d="M300 209h6.5v157.5H300z" />
    <path d="M170.5 342.5h135v6.5h-135z" />
    <g>
      <path
        fill="none"
        stroke="#000"
        strokeWidth={2}
        d="M22.5 26.5h348v348h-348z"
      />
    </g>
  </svg>
);

export default injectSheet(styles)(Mondrian);
