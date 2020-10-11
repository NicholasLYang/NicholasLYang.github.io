import React, { useState } from "react";
import HomeGridBlock from "./HomeGridBlock";
import FillerBlock from "./FillerBlock";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  HomePage: {
    width: "65vw",
  },
  gridContainer: {
    fontFamily: "'Source Sans Pro', Helvetica, sans-serif",
    display: "grid",
    height: "75vh",
    gridColumnGap: "50px",
    gridRowGap: "10px",
    paddingBottom: "5%",
    gridTemplateColumns: "auto 10% auto auto",
    gridTemplateRows: "auto auto auto auto auto",
    gridTemplateAreas: `
      "about about blank2 contact"
      "about about blank2 contact"
      "blank4 blank1 resume blank3"
      "reading blank1 resume blank0"
      "reading blank1 projects projects"
    `,
  },
  "@media (max-width: 800px)": {
    gridContainer: {
      display: "flex",
      flexDirection: "column",
    },
  },
});

const blocks = [
  {
    id: 1,
    name: "about",
    color: "#c03221",
  },
  {
    id: 2,
    name: "contact",
    color: "#191923",
  },
  {
    id: 3,
    name: "projects",
    color: "#f39237",
  },
  {
    id: 4,
    name: "reading",
    color: "#bf1363",
  },
  {
    id: 5,
    name: "resume",
    color: "#0e79b2",
  },
];
const HomePage = () => {
  const [activeBlock, setActiveBlock] = useState<number | undefined>(undefined);
  const classes = useStyles();
  return (
    <div className={classes.HomePage}>
      <div className={classes.gridContainer}>
        {blocks.map(({ id, name, color }) => (
          <HomeGridBlock
            key={id}
            isDeactivated={activeBlock !== undefined && activeBlock !== id}
            id={id}
            name={name}
            color={color}
            activeBlock={activeBlock}
            setActiveBlock={setActiveBlock}
          />
        ))}
        <FillerBlock name="blank0" />
        <FillerBlock name="blank1" />
        <FillerBlock name="blank2" />
        <FillerBlock name="blank3" />
        <FillerBlock name="blank4" />
      </div>
    </div>
  );
};

export default HomePage;
