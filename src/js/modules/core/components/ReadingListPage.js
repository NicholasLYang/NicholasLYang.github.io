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
    tabs: {
      display: "none"
    }
  }
};

const ReadingListPage = ({ classes }) => {
  const tabs = [
    "https://eli.thegreenplace.net/2012/08/02/parsing-expressions-by-precedence-climbing",
    "https://eli.thegreenplace.net/2009/03/20/a-recursive-descent-parser-with-an-infix-expression-evaluator/",
    "https://mikepawliuk.ca/2014/03/31/how-to-read-understand-and-study-proofs/",
    "http://frenchy64.github.io/papers/esop16-short.pdf",
    "https://www2.ccs.neu.edu/racket/pubs/popl08-thf.pdf",
    "http://willcrichton.net/notes/gradual-programming/",
    "https://github.com/apple/swift/blob/master/docs/Generics.rst",
    "https://github.com/apple/swift/blob/master/docs/GenericsManifesto.md",
    "http://homepages.inf.ed.ac.uk/wadler/",
    "https://news.ycombinator.com/item?id=15695326",
    "https://jamesclear.com/beginners-guide-deliberate-practice",
    "https://ia802309.us.archive.org/25/items/pdfy-MgN0H1joIoDVoIC7/The_AWK_Programming_Language.pdf",
    "http://cs.brown.edu/courses/cs173/2012/book/book.pdf",
    "http://www.cs.nott.ac.uk/~pszgmh/pearl.pdf",
    "http://www.cs.cmu.edu/%7Erwh/pfpl/2nded.pdf"
  ];
  return (
    <Fader>
      <div className={classes.ReadingListPage}>
        <h2> Reading List </h2>
        <div className={classes.description}>
          These are the books that I'm currently reading or planning to read.
          Hopefully by keeping a list, I can be both more organized and more
          disciplined with my reading. Also, there's a list of articles and
          websites that I inevitable accumulate in my tabs (not visible on
          mobile).
        </div>
        <h3 className={classes.section}>Currently Reading</h3>
        <ul>
          <li> The Power and the Glory by Graham Greene </li>
          <li> Code Complete 2 by Steve McConnell </li>
          <li> Programming Rust by Jason Orendorff and Jim Blandy </li>
        </ul>
        <h3 className={classes.section}>On Deck</h3>
        <ul>
          <li> The Design of Everyday Things by Donald Norman </li>
          <li>
            Haskell Programming from First Principles by Christopher Allen and
            Julie Moronuki
          </li>
        </ul>
        <h3>Planned</h3>
        <ul>
          <li>
            <a href="http://lambda-the-ultimate.org/">Lambda The Ultimate</a>
          </li>
          <li>
            Compilers: Principles, Techniques and Tools (aka the Dragon book) by
            Aho, Lam, Sethi and Ullman
          </li>
          <li>
            Structure and Interpretation of Computer Programs by Abelson and
            Sussman
          </li>
        </ul>
        <h3 className={classes.finished}>Finished</h3>
        <ul>
          <li> Coders at Work by Peter Seibel </li>
          <li> The Quiet American by Graham Greene </li>
        </ul>
        <div className={classes.tabs}>
          <h4> Tabs </h4>
          <ul>
            {tabs.map((tab, index) => (
              <li key={index}>
                <a href={tab}> {tab} </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fader>
  );
};

export default injectSheet(styles)(ReadingListPage);
