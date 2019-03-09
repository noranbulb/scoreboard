import React, {Component} from 'react';
import propsTypes from 'prop-types';
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";
import classNames from 'classnames';

import styles from '../pages/scoreboard/Scoreboard.module.css';


class Counter extends Component {

  static propsTypes = {
    changeScore: propsTypes.func,
    index: propsTypes.number,
    score: propsTypes.number
  };


  render() {

    const {changeScore , index, score} = this.props;

    //let button1 = styles["counter-action"] + ' ' + styles.decrement;

    return (
      <div className={styles.counter}>
        {/*<button className={button1} onClick={() => changeScore(index, -1)}> - </button>*/}

        <button className={classNames(styles["counter-action"],styles.decrement)}
                onClick={() => changeScore(index, -1)}> - </button>
        <span className="counter-score">{score}</span>
        {/*<button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>*/}
        <button className={classNames(styles["counter-action"],styles.increment)}
                onClick={() => changeScore(index, 1)}> + </button>
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
