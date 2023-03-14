import React from "react";

const resultText = {
  win: "You Win",
  lose: "You Lose",
  draw: "It's a Draw",
};

const Result = ({ userChoice, computerChoice, result }) => {
  return (
    <React.Fragment>
      <h2>Result:</h2>
      <table>
        <thead>
          <tr>
            <th>User Choice</th>
            <th>Computer Choice</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userChoice.toUpperCase()}</td>
            <td>{computerChoice.toUpperCase()}</td>
            <td>{resultText[result]}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Result;
