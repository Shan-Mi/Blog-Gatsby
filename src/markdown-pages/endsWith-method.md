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