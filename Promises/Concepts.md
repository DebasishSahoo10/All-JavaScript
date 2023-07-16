# Promises 🚲
1. What is A Promise?

: A Promise is a function which returns a Promise object inside JavaScript which represents the eventual Completion or Failure of an asynchronous operation and its resulting value.

2. What are the keywords that can trigger a Promise?

: (a) Promise Constructor (b) Fetch (c) setTimeout/setInterval (d) Async/Await (e) (.then)

3. Why we need Promises in JavaScript?

: Mainly to handle Asynchronous Operation which otherwise might block the thread or result in a callback hell. With Promise we can propely those opertion using Promise Chaining and also handling error becomes neat here. The secondary reason can be Readability of the code.

4. What are the ways to handle errors in JavaScript? What is the best way?

: there can be many. (.catch) is one. then (catch) block of (try...catch) is another. we can also finally method to handle some errors. There is no such best way, these days we use Async Await a lot to make server calls, so in that sense Catch block is highly used and recommended.

5. What are the usage of (.then) and (.catch)?

: they are used for handling resolved and rejected state of the Promise. Also for Promise Chaining. a thing to note here will be every (.then) and (.catch) returns a Promise in itself.

6. How do Promises handle Asynchronous Operations in the background?

: A simplistic answer for that will that be JavaScript moves a Promise functions from the call stack to the Microtask Queue, then from there an algorithim called Event Loop checks for all the synchronous code to finish executing, then it pushes that function to the call stack. in a more detailed answer, things like a bare constructor vs constructor inside another function. (.then). Browser APIs will play a key role.

7. Why Async/Await came? What are they?

: Reasons of Async/Await's making are mainly two : One is to make asynchronous code look more like synchronous syntaxes. Second is to manage asynchronity a bit better.

8. Why do we chain Promises?

: to execute multiple asynchrnous operations sequentially, where each subsequent operation depends on the result of the Previous one. this task can be done otherwise but chaining Promises make the code more readable while handling complex asynchronous workflows.

9. What are all the Promise Methods?

: (a) Promise.all takes an array of Promises and return an array of results, if every Promise got resolved. And if any one of it Rejects, then it will return only that rejected value.

(b) Promise.allSettled takes an array of Promises and return an Promise which in turn returns an array of objects, every object represnts one of those Promises and have two keys : status of that Promise (Rejected, Fullfilled) and Value or Reason (value if the Promise is Fullfilled, Reason if the Promise is Rejected). But Yes Promise.allSettled will return only when all the given Promises are settled.

(c) Promise.any() takes an array of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises fulfills, with the first fulfillment value. It rejects when all of the input's promises reject, with an AggregateError containing an array of rejection reasons.

(d) Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles (no matter if rejected or resolved)

10. Can a Promise can be cancelled? Why or Why Not?

: Once a Promise is initialised it can not be cancelled, Because JavaScript natively doesn't provide that option. However there is an walk arround to do it with a mix of Promise.race() method with and Timed Promise. We put our Original Promise with the Timed Promise as input to Promise.race(). The timed Promise has a setTimeout() which will reject that promise after a certain time. as we know Promise.race returns the first promise that is setteled, so if our original promise settles in that time limit, it will be counted. I have read somewhere there are some external libraries to do it, But I haven't tried any yet.

11. How do you handle multiple asynchrnous operation using Promises?

: If we want to execute them one after another, then we can use Promise Chaining and if we want them to be executed all at once, then we can use Promise Methods like Promise.all()

12. Promise is a Constructor or a Generator?

: Promise is a Constructor function and the function it takes as a parameter is a Executor.

13. How do you handle a Promise that take to long to resolve?

: there are two ways. One is to mix Promise.race() and a Timed Promise. Or we can use a Flag check + setTimeout.

14. How do you handle Promises in the browser it is not supported?

: The answer is Pollyfills. To write your own version of Promise that consists pre-ES6 javascript codes.

15. How to retry a Promise that is not resolved at first?

: We can use Recursive methods to do it, also some external libraries are there, but if we do it Recursively, it will be like this 
```js
function retry(fn, retries, delay) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        if (retries === 0) {
          reject(error);
        } else {
          setTimeout(() => {
            retry(fn, retries - 1, delay).then(resolve, reject);
          }, delay);
        }
      });
  });
}

// Usage example
retry(somePromiseFunction, 3, 1000)
  .then((result) => {
    // Promise resolved after retries
  })
  .catch((error) => {
    // Promise rejected after retries
  });
```

16. How can you handle multiple asynchrnous operatiions with different error handling requirements?

: Multiple Catch statements or if we are using async await then we can use catch block.

17. How to chain promises using async await?

: 
```js 
async function test() {
  let v1 = await func1();
  let v2 = await func2(v1);
  let v3 = await func3(v1, v2);
  return v3;
}
```