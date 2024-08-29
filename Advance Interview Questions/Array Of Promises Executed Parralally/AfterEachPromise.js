const executeParallel = (asyncFuncs, callback) => {
  asyncFuncs.forEach(async (func) => {
    try {
      const output = await func;
      callback(output);
    } catch (value) {
      callback(value);
    }
    // func.then((value) => callback(value)).catch((value) => callback(value));
  });
};

const asyncTask = async (num) => {
  return new Promise((res, rej) => {
    if (num < 2) {
      setTimeout(() => {
        res(num);
      }, num * 1000);
    } else {
      setTimeout(() => {
        rej(num);
      }, num * 1000);
    }
  });
};

executeParallel([asyncTask(3), asyncTask(1), asyncTask(2)], (result) => {
  console.log(result);
});
