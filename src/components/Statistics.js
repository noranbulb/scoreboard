import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const Statistics = (props) => {
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

Statistics.propTypes = {
  players: PropTypes.arrayOf ( PropTypes.shape({
    score: PropTypes.number
  }))
};

let mapPropsToState = (state) => ({
  storePlayers: state.playerRecucer.players
});

export default connect( mapPropsToState )(Statistics)
