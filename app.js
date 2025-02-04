'use strict';
const memo = new Map();
//n-0とn-1は最初から決まっているので最初から入れておく
memo.set(0, 0);
memo.set(1, 1);

function fib(n){
    //メモにデータがあればそれを使う
    if(memo.has(n)){
     return memo.get(n);
    }
    //メモにデータがないので計算する
    let value = fib(n-1) + fib(n-2);
    memo.set(n, value);
        return value;
    }　
 const length = 40
 for (let i = 0; i <= length; i++){
     console.log(fib(i));
 }