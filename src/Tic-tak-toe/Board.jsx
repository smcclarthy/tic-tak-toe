import React from "react";
import Block from "./Block";
import styles from "./styles.module.css";

export function Board() {
  const blocks = [...Array(9).keys()];
  const [currentPlayer, setCurrentPlayer] = React.useState("X");
  const [blockSegment, setBlockSegment] = React.useState({});
  const [winner, setWinner] = React.useState("None");

  const handleSegmentClick = (e, segmentId) => {
    const currentBlockSegment = { ...blockSegment };
    if (
      currentBlockSegment[segmentId] === undefined &&
      winner !== "X" &&
      winner !== "O"
    ) {
      currentBlockSegment[segmentId] = {
        index: segmentId,
        playerKey: currentPlayer,
      };
      currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");
      setBlockSegment({ ...currentBlockSegment });
      calculateWinner(currentBlockSegment);
    }
  };
  const calculateWinner = (boardStanding) => {
    const xPlays = [];
    const oPlays = [];
    const winningGames = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];

    for (const [_, item] of Object.entries(boardStanding)) {
      if (item.playerKey === "X") xPlays.push(item.index);
      else if (item.playerKey === "O") oPlays.push(item.index);
    }

    for (let i = 0; i < winningGames.length; i++) {
      if (
        xPlays.includes(winningGames[i][0]) &&
        xPlays.includes(winningGames[i][1]) &&
        xPlays.includes(winningGames[i][2])
      ) {
        setWinner("X");
        break;
      } else if (
        oPlays.includes(winningGames[i][0]) &&
        oPlays.includes(winningGames[i][1]) &&
        oPlays.includes(winningGames[i][2])
      ) {
        setWinner("O");
        break;
      }
    }
  };

  const resetBoard = (e) => {
    e.preventDefault();
    setBlockSegment({});
    setCurrentPlayer("X");
    setWinner("None");
  };
  return (
    <>
      <div className={styles.boardWrapper}>
        <h2>Winner: {winner}</h2>
        <h2>Current Player: {currentPlayer}</h2>
        <button onClick={resetBoard}>Reset Board</button>
        <div className={styles.boardBox}>
          {blocks.map((val) => {
            return (
              <Block
                key={val}
                segmentId={val}
                handleSegmentClick={handleSegmentClick}
                playerValue={blockSegment[val]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Board;
