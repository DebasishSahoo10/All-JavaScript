1. Which things go into microtask queue and which things go to callback queue?

: Every thing that doesn't a micro task as per JS goes into callback queue. For an example all the timers : setTimeout() - setInterval(). In the Microtask queue mainly Promises and Mutation observer callback takes place. Microtask has priority over Callback queue.