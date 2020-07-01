const elapse = time => new Date(Date.now() - time).getSeconds();

const now = Date.now();

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('done!');
    reject(new Error('Oops!'));
  }, 3000);
})
  .finally(() => {
    console.log(`Anyway the promise will print`);
  })
  .then(res => {
    console.log(`Elapse: ${elapse(now)}s\n${res}`);
  })
  .catch(err => {
    console.error(`Elapse: ${elapse(now)}s\n${err}`);
  });
