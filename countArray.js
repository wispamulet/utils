function countUp(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countUp(n - 1);
    countArray.push(n);
    return countArray;
  }
}

function countDown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countDown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;
  }
};

console.log(rangeOfNumbers(4, 4));
