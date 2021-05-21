type NonEmptyArray<T> = [T, ...T[]];

// Type '[]' is not assignable to type 'NonEmptyArray<number>'.
// Source has 0 element(s) but target requires 1.
const a: NonEmptyArray<number> = [];

// OK
const b: NonEmptyArray<number> = [5];
const c: NonEmptyArray<number> = [5, 5];
