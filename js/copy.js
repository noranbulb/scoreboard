var book = {title: '인사이드' , price : 18000 };


//키가 같으면 값이 오버라이딩 되고 다르면 추가된다.
var es5 = Object.assign({} , book , {title:'ex5 문법'} , {b: 2});
es5.price = 30000;
console.log( book );
console.log( es5 );


var es6 = {...book, ...{title:'es6 문법'}};

console.log(es6);
