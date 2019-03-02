import React, {Component} from 'react';

export class Stopwatch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isRunning: false,
      timer: 0
    }
  }

  //돔이 생성된 직후
  componentDidMount() {
    this.tickRef = setInterval( this.tick , 1000 )
  }

  tick = () => {

    /*
    if( this.state.isRunning ) {
      this.setState( prevState => {
        return { timer: prevState.timer + 1 }
      })
    }
    */

    if (this.state.isRunning){
      this.setState(prevState => prevState.timer += 1);
    }

  };

  //돔이 파괴되기 직전
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }

  handleStopwatch = () =>
  {
    /*
    this.setState( prevState => {
      return {
        isRunning: !prevState.isRunning
      }
    });
    */

    /*
      위코드를 보면
      { } 사용하면 이것이 객체인지 구분이 안가서 return 문을 넣어주는데
      { return {} } 을  () 로 줄일수 있다.
    */
    this.setState( prevState => ( {isRunning: !prevState.isRunning} ) );


  };

  handleReset = () => {
    this.setState({timer: 0});

  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">  {this.state.timer}   </span>
        <button onClick={this.handleStopwatch} > {this.state.isRunning ? 'Stop':'Start'} </button>

        <button onClick={this.handleReset}>Rest</button>
        {/*<button onClick={() => this.setState({timer:0})}>Rest</button>*/}
      </div>
    )
  }
}
