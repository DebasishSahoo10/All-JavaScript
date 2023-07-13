/// 1 : The Promise keyword doesn't need any Browser API to pause the execution. the moment JS Engine encounters a Promise keyword it throws the whole function off from call stack to the Micro task queue while resolving or rejecting the promise right away while creating a Promise object with some keys like : onFullfillment, status, value. then if the engine encounters a (.then) or (.catch), it will store the value inside the onFullfillment (mostly a function). when all the synchronous codes are finished then Event Loop checks and pushes that onFullfillment function to the call stack.
console.log("Start")
const asynFunc = new Promise((res, rej) => {
  res("Finish")
})
asynFunc.then(console.log)
console.log("Mid")
/// Output : Start , Mid , Finish