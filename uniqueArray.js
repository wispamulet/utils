// Assume we have a array = [1, 1, 2, 3, 4, 2, 5, 4, 2, 5]

const uniqueArray = array =>
  array.filter((ele, i, arr) => arr.indexOf(ele) === i);

const uniqueArray = array =>
  array.reduce(
    (accumulator, element) =>
      accumulator.includes(element) ? accumulator : [...accumulator, element],
    []
  );

const uniqueArray = array => [...new Set(array)];
