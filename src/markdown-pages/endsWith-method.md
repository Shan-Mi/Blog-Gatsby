---
title: 'endsWith - String method'
date: '2020-12-06'
description: 'Good to know what you donot know series'

---
Recently took lots of exercises on CodeWars and leetcode, and found some smart solutions when I checked other\'s answers. So will update here.

```js
export function automorphic(n: number) {
  return `${Math.pow(n, 2)}`.endsWith(`${n}`) ?
    "Automorphic" : "Not!!";
}
```

This is smart, and I did the whole set of `toString`, `slice`, `join` thing to get the same result...what a shame.

---
## to Binary
```js
11..toString(2)
new Number(str).toString(2)
```

---
## [Extra Perfect Numbers](https://www.codewars.com/kata/5a662a02e626c54e87000123/train/typescript)
```js
export const extraPerfect = (n: number): number[] => [...Array(n)].map((_, i) => i + 1).filter(n => n % 2);
```
Again, smart. Get an empty array by using Array constructor, then get back index array, in the end filter odd numbers. <code>(n%2 ===1 => true)</code>