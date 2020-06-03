const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  for (let i = 3; i >= 0; --i) {
    await sleep(1000);
    console.log(i || 'Happy New Year!');
  }
})();
