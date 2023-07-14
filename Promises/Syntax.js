/// 1 : The Promise keyword doesn't need any Browser API to pause the execution. the moment JS Engine encounters a Promise keyword it doesn't throw the whole function off from call stack to the Micro task queue, it first goes inside it and executes all the synchronous codes and then when it encounters a keyword related Promises e.g Resolve, Reject, then it throws that specific line only out of call stack to the micro task queue, then it goes on executing further syncronous codes (async await works different here) while resolving or rejecting the promise right away while creating a Promise object with some keys like : onFullfillment, status, value. then if the engine encounters a (.then) or (.catch), it will store the value inside the onFullfillment (mostly a function). when all the synchronous codes are finished then Event Loop checks and pushes that onFullfillment function to the call stack.
console.log("Start")
const asynFunc = new Promise((res, rej) => {
  res("Finish")
})
asynFunc.then(console.log)
console.log("Mid")
/// Output : Start , Mid , Finish

/// 2 : But things start to go weird when we play with that Promise keyword a bit more, when we declare a Promise like this :
console.log("Start")
const asynFunc2 = new Promise((res, rej) => {
  console.log("Inside")
  res("Finish")
})
console.log("Half Way")
asynFunc2.then(console.log)
console.log("Mid")
/// Then the execution go inside the Promise and executes the synchronous lines just like that. so the Output will be : Start, Inside, HalfWay, Mid, Finish
/// But if we put inside another function, then that functions need calling to execute the whole function, even the sycnhronous lines won't be executed untill the function has not been called
console.log("Start")
const asynFunc3 =  () => new Promise((res, rej) => {
  console.log("Inside")
  res("Finish")
})
console.log("Half Way")
asynFunc3().then(console.log)
console.log("Mid")
/// here the output will be : Start, Halfway, Inside, Mid, Finish. These are the things that makes Javascript Weird

/// 3 : Promise Chaining has also wierd parts. First is : in the Promise Chains, the Line where our Promise lands us (depending on the resolve or reject), all the (.then) after that will try to run even if we are not returning any value to them
const asynFunc4 =  new Promise((res, rej) => {
  console.log("Inside")
  res("Finish")
})
asynFunc4.then(console.log).catch(() => console.log("No need")).then(() => console.log("No need 2")).then(()=> console.log("No Need 3"))
/// Output : Inside, Finish, No Need 2, No Need 3 : Here Catch won't run as we are not returning any Error to it but every (.then) will run as it is
/// But what if I change the code to this
const asynFunc5 =  new Promise((res, rej) => {
  console.log("Inside")
  res("Finish")
})
asynFunc5.then(console.log).catch(console.log("No need")).then(console.log("No need 2")).then(console.log("No Need 3"))
/// Output : Inside, No Need, No Need 2, No Need 3, Finish. Here not just the catch block executed but also all the console logs becomes synchronous and ran just after Inside. weird.