createAsyncTask = () => {
  let randomVal = Math.floor(Math.random() * 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomVal > 5) {
        resolve(randomVal);
      } else {
        reject(randomVal);
      }
    }, randomVal * 100);
  });
};

const tasks = [createAsyncTask, createAsyncTask, createAsyncTask, createAsyncTask, createAsyncTask];

const taskRunnerInterative = async (tasks, cb) => {
  const result = [];
  const error = [];
  for (let task in tasks) {
    try {
      const successTask = await task();
      result.push(successTask);
    } catch (error) {
      error.push(error);
    }
  }

  cb(result, error);
};

taskRunnerInterative(tasks, (result, error) => console.log(result, error));
