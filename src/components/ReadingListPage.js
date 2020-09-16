import React from "react";
import Fader from "./Fader";
import injectSheet from "react-jss";

const styles = {
  ReadingListPage: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "column",
    maxWidth: "600px",
    paddingBottom: "20px"
  },
  finished: {
    color: "#7f7f7f"
  },
  description: {
    paddingBottom: "20px"
  },
  section: {
    padding: "0",
    lineHeight: "0.8em"
  },
  "@media (max-width: 500px)": {
    ReadingListPage: {
      paddingLeft: "20px",
      paddingRight: "20px"
    },
  }
};

const ReadingListPage = ({ classes }) => {
  return (
    <Fader>
      <div className={classes.ReadingListPage}>
        <h2> Reading List </h2>
        <div className={classes.description}>
          These are the books that I'm currently reading or planning to read.
          Hopefully by keeping a list, I can be both more organized and more
          disciplined with my reading. There's also a list of movies that I've
          watched.
        </div>
        <h3 className={classes.section}>Currently Reading</h3>
        <ul>
          <li> Righteous Victims by Benny Morris </li>
          <li> The Little Typer by Daniel P. Friedman and David Thrane Christiansen </li>
        </ul>
        <h3 className={classes.section}>On Deck</h3>
        <ul>
          <li>
            Feynman Lectures on Computation by Richard Feynman
          </li>
        </ul>
        <h3 className={classes.finished}>Finished</h3>
        <ul>
          <li> Pattern Recognition by William Gibson </li>
          <li> Ayiti by Roxane Gay </li>
          <li> The Years That Matter Most by Paul Tough </li>
          <li> The Man Who Solved The Market by Gregory Zuckerman </li>
          <li> The Sympathizer by Viet Thanh Nguyen </li>
          <li> Dreyer's English by Benjamin Dreyer </li>
          <li> The Design of Everyday Things by Donald Norman </li>
          <li> The Power and the Glory by Graham Greene </li>
          <li> The Quiet American by Graham Greene </li>
          <li> Coders at Work by Peter Seibel </li>
        </ul>
        <div>
          <h4> Movies </h4>
          <ul>
	    <li> Varda by Agnès dir. Agnès Varda </li>
            <li> Close-Up dir. Abbas Kiarostami </li>
            <li> Wanda dir. Barbara Loden </li>
            <li> The Player dir. Robert Altman </li>
            <li> Da 5 Bloods dir. Spike Lee </li>
            <li> The Terrorizers dir. Edward Yang </li>
            <li> I'm Thinking of Ending Things dir. Charlie Kaufman </li>
            <li> The Passenger dir. Michelangelo Antonioni </li>
            <li> Pickpocket dir. Robert Bresson </li>
            <li> Adaptation dir. Spike Jonze </li>
            <li> Love and Anarchy dir. Lina Wertmüller </li>
            <li> Eternal Sunshine of the Spotless Mind dir. Michel Gondry </li>
            <li> Being John Malkovich dir. Spike Jonze </li>
            <li> Le Samouraï dir. Jean-Pierre Melville </li>
            <li> Sans Soleil dir. Chris Marker </li>
            <li> Down By Law dir. Jim Jarmusch </li>
            <li> La Jetée dir. Chris Marker </li>
            <li> Blow Up dir. Michelangelo Antonioni </li>
            <li> Vertigo dir. Alfred Hitchcock </li>
            <li> Ivan's Childhood dir. Andrei Tarkovsky </li>
            <li> Aguirre, the Wrath of God dir. Werner Herzog </li>
            <li> Chungking Express dir. Wong Kar-wai </li>
            <li> A Man Escaped dir. Robert Bresson </li>
          </ul>
        </div>
      </div>
    </Fader>
  );
};

export default injectSheet(styles)(ReadingListPage);
