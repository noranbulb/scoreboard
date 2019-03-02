import React from 'react';

export const Statistics = (props) => {
  const player = props.players.length;

  let totalScore = 0;
  props.players.forEach( item => totalScore += item.score );

  return (

    <table>
      <tbody className="stats">
      <tr>
        <td>Players : </td>
        <td>{player}</td>
      </tr>
      <tr>
        <td>Total Points : </td>
        <td>{totalScore}</td>
      </tr>
      </tbody>
    </table>

  )
};
