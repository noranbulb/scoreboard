import React from 'react';
// import './App.css';
// import Header from "./components/Header";
// import Player from "./components/Player";
// import AddPlayerForm from "./components/AddPlayerForm";

import style from './Scoreboard.module.css';


import {connect} from "react-redux";
import Header from "../../components/Header";
import Player from "../../components/Player";
import AddPlayerForm from "../../components/AddPlayerForm";

// 선택 범위 : control-w
/*const header = (
  <header>
    <h1 id={myTitleId}>ldk's {title}</h1>
    <p>{desc}</p>
  </header>
);*/

class Scoreboard extends React.Component {
  /*state = {
    players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4},
    ]
  };*/

  /*handleRemovePlayer = (id) => {
    this.setState(prevState => ({

      players: prevState.players.filter( ( player , key)  => {
        console.log( key , player.id !== id);
        return player.id !== id;
      })
    }));
  };*/



  /*handleChangeSocre = (index, delta) => {
    //console.log(index, delta);
    const players = this.state.players.map((player, idx) => {
      if (idx === index) {
        player.score = player.score + delta;
        return player;
      } else {
        return player;
      }
    });

    this.setState({players});
  };*/

  /*handleAddPlayer = (name) => {
    this.setState( prevState => {

      //가장 큰 player id를 구한다.
      let maxId = 0;

      this.state.players.forEach( item => item.id > maxId ? maxId = item.id : maxId = maxId );

      return {
        players: [
          //...prevState.players, {id: maxId + 1 , name: name , score: 0}
          ...prevState.players, {id: maxId + 1 , name , score: 0} //키와 벨류가 같으면 하나로 생략
        ]
      }

    })

  };*/

  render() {
    return (
      <div className={style.scoreboard}>
        <Header players={this.props.players} />

        {
          this.props.players.map((play, index) => <Player
            id={play.id}
            name={play.name}
            index={index}
            score={play.score}
            key={play.id}
            //removePlayer={this.handleRemovePlayer}
            //changeScore={this.handleChangeSocre}
          />)
        }

        {/*<AddPlayerForm addPlayer={this.handleAddPlayer}/>*/}
        <AddPlayerForm />

      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  players: state.playerRecucer.players

})

export default connect(mapStateToProps)(Scoreboard);
