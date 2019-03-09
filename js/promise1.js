// 1. promise 개념 : 비동기를 순차적으로 처리한다.
// 2. promise를 만드는 2가지 방법과 그 차이점 알기
// 3. promise를 사용하는 방법

//1)promise 를 만드는 방법 : 생성자함수
/*
let promise = new Promise(resolve => {
  setTimeout(()=>{
    console.log('async setTimeout');
    resolve('success');
  }, 1000);
});
//Promise 생성자안의 펑션은 executor로써 선언과 동시에 실행된다.
//pending 상태 => resolve 상태 => settled 상태


//사용하는 방법
promise.then(value => {
  console.log(value)
});
*/


//2번째 방법인데 잘못된 방법이 두번째 then에 있다.
/*new Promise(resolve => {
  setTimeout(()=>{
    console.log('async 1');
    resolve('success 1');
  }, 1000);
}).then(value => {

  console.log(value);

  setTimeout( () => console.log('async 2') , 1000 );
  return 'success 2'

}).then(value => {
  console.log(value)
});*/

//3번째 잘된 예
new Promise(resolve => {
  setTimeout(()=>{
    console.log('async 1');
    resolve('success 1');
  }, 1000);
}).then(value => {

  console.log(value);

  //setTimeout( () => console.log('async 2') , 1000 );
  return new Promise(resolve => {
    setTimeout ( () => {
      console.log('async2');
      resolve('success 2');
    } , 1000 )

  })

}).then(value => {
  console.log(value)
});
