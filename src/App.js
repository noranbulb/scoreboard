//import React, { Component } from 'react';
import React from 'react';
//import logo from './logo.svg';
import './App.css';



/*
const players = [
  {name: 'LDK', score: 30 , id:1},
  {name: 'HONG', score: 40 , id:2},
  {name: 'KIM', score: 50 , id:3},
  {name: 'PARK', score: 60 , id:4},
];
*/

// const title = 'main-title';
// const myTitleId = 'main-title';
// const desc = 'My First React Element';
// const desc2 = ''; //사용하지 않는 코드는 회색


/*const header = (
  <header>
    <h1 id={myTitleId} title={title}>lds's {title}</h1>
    <p className='test'>{desc}</p>
  </header>
);*/
//ReactDOM.render(header, document.getElementById('root'));

/*function Header (props) {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className='stats'>Players: 1</span>
    </header>
  );
}*/



//arrow function
const Header = (props) => {
  //console.log(props)

  return (
    <header>
      <h1>{props.title}</h1>
      <span className='stats'>Players:{props.totalPlayers}</span>
    </header>

  )
};

//const  Res = <Header name='sara'/>


//ReactDOM.render( <Header />, document.getElementById('root') );
//ReactDOM.render( Res , document.getElementById('root') );

/*const Counter = (props) => (
  <div className="counter">
    <button className="counter-action decrement"> -</button>
    <span className="counter-score">{props.score}</span>
    <button className="counter-action increment"> +</button>
  </div>
);*/

class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      players: 1,
      score : 0
    };

    this.incrementScore =  this.incrementScore.bind( this );
    this.decrementScore = this.decrementScore.bind( this );
  }

  incrementScore(){
    //console.log('this ' , this);

    // this.setState(
    //   {score: this.state.score + 1}
    // );

    this.setState( prevStage => {
      //console.log( prevStage.score )
      return {score : prevStage.score + 1}
    });

  }

  decrementScore()
  {
    this.setState( prevStage => {
      return {score: prevStage.score - 1 }
    });
  }



  render() {

    return (

      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> -</button>
        {/*<span className="counter-score">{props.score}</span>*/}
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> +</button>{/*선언형*/}
      </div>

    );
  }

}


const Player = (props) => {
  //console.log(props);
  return (
    <div className="player">

      {/*
      <span><button onClick={ props.removePlayer( props.id )}>x</button></span>
      //명령이 들어가면 안된다
      */}

      {/*무조건 선언형이 들어가야함 function() {} or () => */}
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
      </span>

      <span className="player-name">
        {props.name}
      </span>


      <Counter />
    </div>
  );
};


/*const App = ( props ) => {
  return (
    <div className="scroreboard">
      <Header title="My Scoreboard" totalPlayers={10} />

      {/!*{ player list }*!/}

      {
        /!*
        <Player name="LDK" score={50} />
        <Player name="HONG" score={40} />
        <Player name="KIM" score={30} />
        <Player name="PARK" score={20} />
        *!/
      }

      {/!*{
        players.map( (k , i ) => {
          console.log(k , i  , players[i])
        })
      }*!/}

      {
        props.initialPlayers.map( (play) => {
                  console.log(play)
                  return <Player name={play.name} score={play.score} key={play.id}/>
        })
      }
    </div>
  )
}*/




class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  };

  constructor()
  {
    super();

    this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
          players: prevState.players.filter(item => item.id !== id)
        }
      )
    )
  };


  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} />

        {/*Players List*/}
        { this.state.players.map(item => <Player name={item.name}
                                                 key={item.id.toString()}
                                                 id={item.id}
                                                 removePlayer={this.handleRemovePlayer} />)
        }
      </div>
    );
  };
}



// ReactDOM.render(<App />, document.getElementById('root'))



export default App;
