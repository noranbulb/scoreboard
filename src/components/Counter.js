import React, {Component} from 'react';
import propsTypes from'prop-types';
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";

class Counter extends Component {

  static propsTypes = {
    changeScore: propsTypes.func,
    index: propsTypes.number,
    score: propsTypes.number
  };


  render() {

    const {changeScore , index, score} = this.props;

    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
        <span className="counter-score">{score}</span>
        <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
      </div>
    )
  }
}


/*
Counter.propsTypes = {

  index: propsTypes.number,
  score: propsTypes.number,
  changeScore: propsTypes.func

};
*/

/*
let mapStateToProps = (state) => {
  return {
    index: state.playerRecucer.players.
  }
}
*/

export default connect(null, { changeScore } )(Counter);
