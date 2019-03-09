console.log('start');

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout( () => {
      resolve(x);
    }, 2000 );
  })
}

//어싱크 안에 어웨트가 분명 있어야함. 프라미스다 . 비동기

async function add1(x) {

  const a = await resolveAfter2Seconds(20); //2초동안 기다리고 있다
  console.log(a);

  const b = await  resolveAfter2Seconds(30);
  console.log(b);

  return x + a + b;

}



console.log( add1(10).then( (value => console.log('add1 :' , value )))  );

console.log('end');
