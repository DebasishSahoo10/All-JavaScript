# Promises 🚲
1. What is A Promise?

: A Promise is a two pronged facade function which can do two works. One is to initate background web browser work and Two is to return a Promise object inside JavaScript which represents the eventual Completion or Failure of an asynchronous operation and its resulting value

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