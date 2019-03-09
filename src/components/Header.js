import React from 'react';
import Statistics from "./Statistics";
import {Stopwatch} from "./Stopwatch";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateTITLE} from "../redux/actions";

// const Header = ({players, title , changeTitle}) => {
const Header = ({players, title , updateTITLE}) => {
  //const {players, title} = props ;

  return (
    <header>
      <Statistics players={players} />

      {/*<h1 onClick={changeTitle}>{title}</h1>*/}
      <h1 onClick={()=> updateTITLE('test...')}>{title}</h1>

      <Stopwatch />

    </header>
  );
};


Header.propTypes = {
  players : PropTypes.arrayOf( PropTypes.object ),
  title : PropTypes.string
};

Header.defaultProps = {
  title: 'default title'
};


//서브스크라이브를 하고 리액트 리덕스에서 이미 만들어놨다.
let mapStateToProps = (state) => {
  return {
    title: state.playerRecucer.title
  }
};

//action을 dispatch하는 펑션을 props로 매핑
let mapActionToProps = (dispatch) => {
  return {
    changeTitle: () => dispatch(updateTITLE('test'))
  }
}

 // export default connect(mapStateToProps, mapActionToProps)(Header);
export default connect(mapStateToProps, {updateTITLE})(Header);
