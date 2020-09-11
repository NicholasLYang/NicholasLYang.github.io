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
  const programmingLanguagesLinks = [
    "http://frenchy64.github.io/papers/esop16-short.pdf",
    "https://www2.ccs.neu.edu/racket/pubs/popl08-thf.pdf",
    "http://willcrichton.net/notes/gradual-programming/",
    "https://github.com/apple/swift/blob/master/docs/Generics.rst",
    "https://github.com/apple/swift/blob/master/docs/GenericsManifesto.md",
    "http://homepages.inf.ed.ac.uk/wadler/",
    "https://ia802309.us.archive.org/25/items/pdfy-MgN0H1joIoDVoIC7/The_AWK_Programming_Language.pdf",
    "http://cs.brown.edu/courses/cs173/2012/book/book.pdf",
    "http://www.cs.nott.ac.uk/~pszgmh/pearl.pdf",
      "http://www.cs.cmu.edu/%7Erwh/pfpl/2nded.pdf",
      "http://lambda-the-ultimate.org/node/4170#comment-63836",
    "http://theory.stanford.edu/~barrett/pubs/KHI+19.pdf",
    "https://eli.thegreenplace.net/2019/go-compiler-internals-adding-a-new-statement-to-go-part-1/",
    "https://kristoff.it/blog/what-is-zig-comptime/",
    "https://swift.org/blog/new-diagnostic-arch-overview/",
    "https://github.com/apple/swift/blob/master/docs/TypeChecker.rst"
  ];
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
