import React, {Component} from 'react';
import {connect} from "react-redux";
import {addPlayer} from "../redux/actions";

class AddPlayerForm extends React.Component {

  textInput = React.createRef();

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
    //this.props.addPlayer ( this.state.playerName );
    this.props.addPlayer ( this.textInput.current.value );

    //폼 초기화
    this.setState( { playerName: ''  });

  };



  render() {
    return (

      <form onSubmit={this.handleSumit}>
        <input type="text" placeholder="enter"
               // value={this.state.playerName}
               // onChange={ this.handleValueChange }
          ref={this.textInput}
        />
        <input type="submit" value="Add Player" />

      </form>

    )
  }
}

export default connect(null, {addPlayer})(AddPlayerForm);
