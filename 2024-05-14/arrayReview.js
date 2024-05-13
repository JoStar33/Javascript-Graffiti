const array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(array.slice(4, 8));

console.log(array.splice(4, 2)); // [ 5, 6 ]

console.log(array); // [ 1, 2, 3, 4, 7, 8 ]

console.log(
  array.some((element) =>
    [5, 6].find((exceptElement) => exceptElement === element)
  )
);

console.log(
  array.every((element) =>
    [5, 6].find((exceptElement) => exceptElement !== element)
  )
);
