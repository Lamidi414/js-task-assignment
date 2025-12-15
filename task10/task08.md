## JavaScript Scope Example – Explanation
---

### Explanation

* A **global variable** `message` is declared with the value **"Hello"**.

* Inside the `outer()` function, another variable named `message` is declared with the value **"Hi"**.

  * This **shadows** the global `message` variable.

* The `inner()` function is defined **inside** `outer()`, so it has access to variables in `outer()` due to **lexical scoping**.

* When `inner()` executes `console.log(message)`:

  1. JavaScript looks for `message` inside `inner()` → not found
  2. It then looks inside `outer()` → found (`"Hi"`)
  3. The search stops, and the global `message` is ignored

---

### Key Concepts

* **Lexical Scope**: Functions can access variables from the scope in which they were defined.
* **Variable Shadowing**: A local variable with the same name as a global variable overrides it within that scope.

✅ Therefore, the output is **"Hi"**.
