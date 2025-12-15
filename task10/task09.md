## JavaScript Nested Scope Example – Explanation

### Explanation

* A **global variable** `x` is declared with the value **"Global"**.

* Inside the `outer()` function, another variable named `x` is declared with the value **"Outer"**.

  * This variable shadows the global `x` within `outer()`.

* Inside the `inner()` function, a **third variable** named `x` is declared with the value **"Inner"**.

  * This variable shadows both the `outer()` and global `x` variables.

* When `console.log(x)` is executed inside `inner()`:

  1. JavaScript looks for `x` inside `inner()` → found (`"Inner"`)
  2. The search stops immediately
  3. `outer()` and global `x` are ignored

---

### Key Concepts

* **Lexical Scope**: Functions access variables based on where they are defined, not where they are called.
* **Variable Shadowing**: When a variable in an inner scope has the same name as one in an outer scope, the inner variable takes precedence.

✅ Therefore, the output is **"Inner"**.
