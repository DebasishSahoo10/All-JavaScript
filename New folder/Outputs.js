/// 1
async function asyncFunc() {
  try {
    let response = await Promise.reject("errorrrrr");
  } catch (error) {
    return error;
  }
}
asyncFunc().then(console.log);
/// output : errorrrrr
/// 1 : what if it will be throwing an error instead of returning : then we have to catch and not .then
async function asyncFunc() {
  try {
    let response = await Promise.reject("errorrrrr");
  } catch (error) {
    throw error;
  }
}
asyncFunc().catch(console.log);
/// output : errorrrrr
/// 1 : why console.log here doesn't require a argument : because the only argument there is automatically passed

/////////////////////////////////////////////////////////////////////////////////

/// 2 : without an try and catch error
async function asyncFunc() {
  let response = await Promise.resolve("Hello");
  return response;
}
asyncFunc().then(console.log);
/// output : Hello
/// 2 : what if we are rejcting the Promise, then (.then) will crash code and to run it properly we need a (.catch) block
async function asyncFunc() {
  let response = await Promise.reject("Hello");
  return response;
}
asyncFunc().catch(console.log);

/////////////////////////////////////////////////////////////////////////////////

/// 3 : Promise.race : The Promise.race() method is one of the promise concurrency methods, which takes an array of promises and returns the first one that settles or fullfills
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve("first"), 500)),
  new Promise((resolve, reject) => setTimeout(() => reject("second"), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve("third"), 1500)),
])
  .then(console.log)
  .catch(console.error);
/// output : first

/////////////////////////////////////////////////////////////////////////////////
/// 4 : Promise.all : It takes an array of Promises, if all the Promise resolves then it will return an array of returned values, if any of this will reject, then it will return the first one that rejects and none of the values which are fullfilled
Promise.all([
  Promise.resolve("first"),
  Promise.reject("second"),
  Promise.resolve("third"),
])
  .then(console.log)
  .catch(console.error);
/// output : second

/////////////////////////////////////////////////////////////////////////////////
/// 5 : Error is an object. Throw works like returns
Promise.resolve("done")
  .then((result) => {
    throw new Error("fail");
    return "success";
  })
  .then((result) => console.log("Success: ", result))
  .catch((error) => console.log("Error: ", error.message));
/// output : Error : fail
/// learning : Error is actually an object and the value we pass to it actually an message key in it. Also throw works exactly like returns, it stops the execution. that is why it never goes to return "success" and skips the (.then)

/////////////////////////////////////////////////////////////////////////////////
/// 6 : returning a string from a catch works just like a normal resolved Promise
Promise.reject("error")
  .catch(() => "catch error")
  .then((response) => console.log("Success: ", response))
  .catch((error) => console.log("Error: ", error));
/// output : Sucess: catch error

/////////////////////////////////////////////////////////////////////////////////
/// 7 : Just a value vs returning a value
Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);
/// output : 1
/// 7 : if we want to return that Promise
Promise.resolve(1)
  .then(2)
  .then(() => Promise.resolve(3))
  .then(console.log);
/// output : 3

/////////////////////////////////////////////////////////////////////////////////
/// 8 : Equating Promises
let promise1 = Promise.resolve("Hello");
let promise2 = Promise.resolve(promise1);
console.log(promise1 === promise2);
/// output : true

/////////////////////////////////////////////////////////////////////////////////
/// 9
async function asyncFunc() {
  try {
    let response = await Promise.reject("error");
  } catch (error) {
    console.log(error);
  }
}
asyncFunc();
/// output : error

/////////////////////////////////////////////////////////////////////////////////
/// 10
Promise.resolve("done")
  .then((res) => {
    console.log(res);
    return "completed";
  })
  .then((res) => {
    console.log(res);
    return "finished";
  })
  .then(console.log);
/// output : done , completed , finished

/////////////////////////////////////////////////////////////////////////////////
/// 11 : when there are two side effects : it stops the code after the first side effects because the passed argument has been already used
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

promise.then(
  (result) => console.log(result),
  (error) => console.log(error)
);
/// output : done!

/////////////////////////////////////////////////////////////////////////////////
/// 12 : output will be nothing as we are not returning any error, if I change the last line to (.then) then it will console.log
Promise.reject("Oops")
  .catch((error) => error + "!")
  .catch(console.error);
/// output :

/////////////////////////////////////////////////////////////////////////////////
/// 13 : mix of async and promise chaining
async function asyncFunc() {
  let response = await Promise.resolve("Hello");
  console.log(response);
  throw new Error("Oops");
}
asyncFunc().catch(console.error);
/// output : Hello, Error : Oops

/////////////////////////////////////////////////////////////////////////////////
/// 14 : throw works like return
async function asyncFunc() {
  let response = await Promise.resolve('Hello');
  throw new Error('Oops');
  return 'World'; /// this code is unrechable
}
asyncFunc().catch(console.error);
/// output : Error : Oops

/////////////////////////////////////////////////////////////////////////////////
/// 15
function asyncFunc() {
  return Promise.resolve('Hello').then(result => { throw new Error('Oops') });
}
asyncFunc().catch(console.error);
/// output : Error : Oops

/////////////////////////////////////////////////////////////////////////////////
/// 16 : Async + IIFE + Await inside another function
(async function() {
  console.log(await Promise.resolve("Hello"));
  return "World";
})().then(console.log);
/// output : Hello, World