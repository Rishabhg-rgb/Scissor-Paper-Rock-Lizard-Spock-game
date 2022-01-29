import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = ({ score, myChoice, setScore }) => {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const [counter, setCounter] = useState(3);

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors","lizard","spock"];
    setHouse(choices[Math.floor(Math.random() * 5)]);
  };
  useEffect(() => {
    newHousePick();
  }, []);

  const Result = () => {
    if (myChoice === "rock" && house === "scissors" || myChoice==="rock" && house==="lizard") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "rock" && house === "paper" || myChoice ==="rock" && house==="spock") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "scissors" && house === "paper" || myChoice==="scissors" && house === "lizard") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "scissors" && house === "rock"|| myChoice==="scissors" && house==="spock") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "paper" && house === "rock" || myChoice==="paper" && house==="spock") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "paper" && house === "scissors"|| myChoice==="paper" && house==="lizard") {
      setPlayerWin("lose");
      setScore(score - 1);
    }
    else if(myChoice==="lizard" && house==="spock" || myChoice==="lizard" && house==="paper"){
      setPlayerWin("win")
      setScore(score+1)
    }
    else if(myChoice==="lizard" && house==="rock" ||myChoice==="lizard" && house==="scissors"){
      setPlayerWin("lose")
      setScore(score-1)
    }
    else if(myChoice==="spock" && house==="scissors" ||myChoice==="spock" && house==="rock"){
      setPlayerWin("win")
      setScore(score+1)
    }
    else if(myChoice==="spock" && house==="lizard"||myChoice==="spock" && house==="paper"){
      setPlayerWin("lose")
      setScore(score-1)
    }
    else {
      setPlayerWin("draw");
    }
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : Result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, house]);

  return (
    <div className="game">
      <div className="game__you">
        <span className="text">You Picked</span>
        <div
          className={`icon icon--${myChoice} ${
            playerWin == "win" ? `icon icon--${myChoice}--winner` : ""
          }`}
        ></div>
      </div>
      {playerWin == "win" && (
        <div className="game__play">
          <span className="text">You Win</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin == "lose" && (
        <div className="game__play">
          <span className="text">You Lose</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin == "draw" && (
        <div className="game__play">
          <span className="text">Draw</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}

      <div className="game__house">
        <span className="text">The House Picked</span>
        {counter == 0 ? (
          <div
            className={`icon icon--${house} ${
              playerWin == "lose" ? `icon icon--${house}--winner` : ""
            }`}
          ></div>
        ) : (
          <div className="counter">{counter}</div>
        )}
      </div>
    </div>
  );
};

export default Game;

/*
 my choice:{myChoice} <br />
      House choice:{house} <br />
      Result:
      {playerWin == "win" && <h2>You Win</h2>}
      {playerWin == "lose" && <h2>You lose</h2>}
      {playerWin == "draw" && <h2>Draw</h2>}
      <Link to="/" onClick={() => setHouse()}>
        Play Again
      </Link>

*/
