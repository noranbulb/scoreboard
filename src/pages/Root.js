import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Heroes} from "./heroes/Heroes";
import Scoreboard from "./scoreboard/Scoreboard";
import {Menu} from "./Menu";
import {Hero} from "./heroes/Hero";


export class Root extends React.Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    return (

      <BrowserRouter>
        <>
          <Menu/>
          {/*<p>공통메뉴 영역</p>*/}

          <div className="container" style={{backgroundColor: '#ffffff'}}>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/heroes" component={Heroes}></Route>
              <Route path="/scoreboard" component={Scoreboard}></Route>
              <Route path="/hero/:hero_id" component={Hero}></Route>
            </Switch>
          </div>

        </>

      </BrowserRouter>

    );

  }
}


/*

import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Heroes} from "./Heroes";
import {Scoreboard} from "./Scoreboard";
import {Menu} from "./Menu";

export class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <BrowserRouter>
        <>
          <Menu/>
          <p>공통메뉴 영역</p>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/heroes" component={Heroes}></Route>
            <Route path="/scoreboard" component={Scoreboard}></Route>
          </Switch>

        </>

      </BrowserRouter>

    );

  }
}

*/
