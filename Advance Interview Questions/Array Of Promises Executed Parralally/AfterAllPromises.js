const asyncParallel = (tasks, callback) => {
  const results = [];
  tasks.forEach((asyncTask) => {
    asyncTask
      .then((value) => results.push(value))
      .catch((value) => results.push(value))
      .finally(() => results.length === tasks.length && callback(results));
  });
};

const createAsyncTask = async (num) => {
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

const taskList = [
  createAsyncTask(1),
  createAsyncTask(2),
  createAsyncTask(6),
  createAsyncTask(2),
  createAsyncTask(1),
  createAsyncTask(2),
];

asyncParallel(taskList, (result) => {
  console.log("Results :", result);
});
