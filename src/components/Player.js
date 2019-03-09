import React from 'react';
import Counter from "./Counter";
import {connect} from "react-redux";
import {removePlayer} from "../redux/actions";


class Player extends React.Component {
  render() {

    console.log(this.props.name, 'rendered');

    const {removePlayer , id , name , score } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>X</button>
        </span>
        <span className="player-name">{name}</span>
        {/*<Counter {...this.props} />*/}
        <Counter score={score} index={id}/>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    //true 아님 false를 리턴해야하는데 안하면 에러가 남
    console.log('should ' , nextProps)
    return nextProps.score !== this.props.score;
  }

  /*
  componentWillReceiveProps(nextProps, nextContext) {
  }
  */

};

export default connect(null, { removePlayer })(Player);
