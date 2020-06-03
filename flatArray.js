const arr = [1, ['2', [null, [undefined, [5, { name: 'yly' }]]]]];

const flat = function*(a) {
  const { length } = a;
  for (let i = 0; i < length; i++) {
    const item = a[i];
    if (item instanceof Array) {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

const result = [];

for (const f of flat(arr)) {
  result.push(f);
}

console.log(result);
