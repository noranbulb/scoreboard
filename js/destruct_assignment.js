var a, b, rest;
/*
[a, b] = [10,20];

console.log(a);
console.log(b);

[a, b, ...rest] = [10,20,30,40,50];

console.log(a);
console.log(b);
console.log(rest);

*/


/*
({a, b} = {a:10,b: 20});

console.log(a);
console.log(b);

({a, b, ...rest} = {a: 10,b: 20,c: 30,d: 40,e: 50});

console.log(a);
console.log(b);
console.log(rest);
*/




[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7

