import {combineReducers, createStore} from "redux";
import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER, UPDATE_TITLE} from "./actionTypes";


//초기 스테이트 만들기
const playerInitialState = {
  title: 'store scoreboard',
  players: [
    {name: 'LDK', score: 0, id: 1},
    {name: 'HONG', score: 0, id: 2},
    {name: 'KIM', score: 0, id: 3},
    {name: 'PARK', score: 0, id: 4},
  ]
};

let playerId = 4;

const playerRecucer =  (state = playerInitialState , action) => {

  switch (action.type) {
    case UPDATE_TITLE:
      return {
        // ***새로운이기 때문에 딥카피를 해야한다.
        ...state,
        title: action.title // 특정한 공을
      }
    case ADD_PLAYER:
      return {
        ...state,
        players: [
          ...state.players,
          {name: action.name, score:0, id: ++playerId }
        ]

      }
    case CHANGE_SCORE :
      state.players.forEach(item => {
        if ( item.id === action.index ){
          item.score += action.score;
        }
      });
      return {
        ...state,
        players: [
          ...state.players
        ]
      }
    case REMOVE_PLAYER:
      return {
        ...state,
        players: state.players.filter(player => player.id !== action.id)
      }
    default :
      return state;

  }
  //return state; //기본 스테이트를 리턴
};

//여러가지 리듀스를 합친다.
const allReducers = combineReducers({playerRecucer}); //키와 벨류가 같아서 하나로 합쳤다.
// 지금은 아무것도 없어서 초기값을 만드는데

export const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


console.log( store );
