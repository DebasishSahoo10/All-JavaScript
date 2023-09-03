# Closures

: Whenever we return a Function out of a function, then the returned function will have access to every variable that it needs to be executed properly. So even if the Parent function has been returned, this inner function of ours will always have all the reference it needs in the memory, because simply those variables are not garbage collected by the JS Engine. This concept is called Closures.

1. One of the best examples of Closures

```js
const outerFunc = () => {
  let a = 12
  return () => {
    a = a + 2
    console.log(a)
  }
}
const funVar = outerFunc()
outerFunc()() // 14 
outerFunc()() // 14
funVar() // 14
funVar() // 16
const runVar = outerFunc()
runVar() // 14
runVar() // 16
```

2. Another One
```js
const testFunc = () => {
  for(i=0; i<3; i++) {
    setTimeout(()=>{
      console.log(i)
    }, i*1000)
  }
}

testFunc() // 3,3,3 : because setTimeout ran after the loop finished and every setTimeout will point to that same reference
```
```js
const testFunc2 = () => {
  for (var i = 0; i < 3; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, (i) * 1000);
    })(i);
  }
}
testFunc2(); // now with every new function will have a new closure and every setTimeout will be refering to different closure environment
```

3. Another One
```js
const outerFunc = () => {
  const newFunc = () => {
    console.log(a)
  }
   a = 12
  return newFunc
}
const toStore = outerFunc()
toStore() // no it's not hositing magic. before returning the function we already had the value of a.
```