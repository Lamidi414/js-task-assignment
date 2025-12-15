## JavaScript Closure Example – Explanation

### Code

```js
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();
```

---

### Output

```
-1
-2
```

---

### Explanation

* The `counter()` function is called once and returns an **inner function**.

* Inside `counter()`, a variable `count` is declared and initialized to `0`.

* Even after `counter()` finishes executing, the returned inner function **remembers** the `count` variable.

  * This behavior is called a **closure**.

* When `reduce()` is called the first time:

  * `count` is decremented from `0` to `-1`
  * `-1` is logged to the console

* When `reduce()` is called the second time:

  * The same `count` variable is used
  * `count` is decremented from `-1` to `-2`
  * `-2` is logged to the console

---

### Key Concepts

* **Closure**: A function that remembers variables from its outer scope even after the outer function has finished executing.
* **State Preservation**: The `count` variable keeps its value between function calls.

✅ Therefore, the output is:

```
-1
-2
```
