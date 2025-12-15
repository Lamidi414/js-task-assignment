# JavaScript Hoisting & Temporal Dead Zone (TDZ)

This document explains **Temporal Dead Zone (TDZ)** and **Hoisting** in JavaScript using **clear explanations and code examples**. It is formatted for easy reading on **VS Code** and **GitHub**.

---

## 1️⃣ Temporal Dead Zone (TDZ)

The **Temporal Dead Zone (TDZ)** is the period between the start of a block scope and the point where a variable declared with **`let`** or **`const`** is initialized.

During the TDZ:

* The variable **exists in memory**
* But **cannot be accessed**
* Accessing it results in a **ReferenceError**

This behavior prevents bugs caused by using variables before they are declared.

### 🔍 Example: TDZ with Three Variables Inside a Block

```js
{
    // TDZ starts here for a, b, and c

    console.log(a); // ❌ ReferenceError
    console.log(b); // ❌ ReferenceError
    console.log(c); // ❌ ReferenceError

    let a = 10;
    const b = 20;
    let c = 30;

    // TDZ ends here
    console.log(a); // ✅ 10
    console.log(b); // ✅ 20
    console.log(c); // ✅ 30
}
```

### ✅ Key Points About TDZ

* Applies to **`let`** and **`const`** only
* Does **not** apply to `var`
* Helps catch errors early
* Exists **from block start to variable initialization**

---

## 2️⃣ Variable and Function Hoisting

**Hoisting** is JavaScript’s behavior of moving declarations to the top of their scope during the **creation phase** of execution.

However, **not all declarations are hoisted the same way**.

---

## 🔹 Variable Hoisting

### `var` Hoisting

Variables declared with `var` are hoisted and initialized with **`undefined`**.

```js
console.log(x); // ✅ undefined
var x = 5;
console.log(x); // ✅ 5
```

✔ No error occurs because `x` exists in memory.

---

### `let` and `const` Hoisting

Variables declared with `let` and `const` are hoisted but **not initialized**, which causes a **TDZ error** if accessed too early.

```js
console.log(y); // ❌ ReferenceError
let y = 10;

console.log(z); // ❌ ReferenceError
const z = 20;
```

---

## 🔹 Function Hoisting

### Function Declarations

Function declarations are **fully hoisted**, meaning they can be called before they appear in the code.

```js
sayHello(); // ✅ Works

function sayHello() {
    console.log("Hello, world!");
}
```

✔ The entire function is stored in memory during the creation phase.

---

### Function Expressions

Function expressions are hoisted **only as variables**, not as functions.

```js
sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function () {
    console.log("Hi!");
};
```

❌ The variable exists as `undefined`, but the function is not yet assigned.

---

## ✅ Summary Table

| Declaration Type | Hoisted | Initialized       | Can Be Used Before Declaration |
| ---------------- | ------- | ----------------- | ------------------------------ |
| `var`            | Yes     | Yes (`undefined`) | Yes                            |
| `let`            | Yes     | No (TDZ)          | No                             |
| `const`          | Yes     | No (TDZ)          | No                             |
| Function Decl.   | Yes     | Yes               | Yes                            |
| Function Expr.   | Partial | No                | No                             |

---

### 🎯 Final Notes

* Use **`let`** and **`const`** to avoid bugs
* Understand TDZ to prevent runtime errors
* Prefer **function declarations** when hoisting is needed.
