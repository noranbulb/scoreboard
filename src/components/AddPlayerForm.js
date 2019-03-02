import React, {Component} from 'react';

export class AddPlayerForm extends React.Component {

  constructor(props)
  {
    super(props);

    this.state =
      {
        playerName: ''
      }
  }

  handleValueChange = (e) =>
  {
    this.setState({playerName: e.target.value});
    //this.props.addPlayer( this.state.playerName )
  };

  handleSumit = (e) =>
  {

    //페이지 리로딩 방지
    e.preventDefault();

    //부모 이벤트 호출
    this.props.addPlayer ( this.state.playerName );

    //폼 초기화
    this.setState( { playerName: ''  });

  };



  render() {
    return (

      <form onSubmit={this.handleSumit}>
        <input type="text" placeholder="enter" value={this.state.playerName} onChange={ this.handleValueChange } />
        <input type="submit" value="Add Player" />

      </form>

    )
  }
}
