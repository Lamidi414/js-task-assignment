## Variable Scope Inside a Loop (Function Scope)

When a variable is declared **inside a loop within a function**, its accessibility depends on **how it is declared**.

---

### Example 1: Variable Declared with `let`

```js
function testScope() {
  for (let i = 0; i < 3; i++) {
    let message = "Hello from inside the loop";
    console.log(message); // ✅ Accessible here
  }

  console.log(message); // ❌ ReferenceError
}

testScope();

```

### Example 2: Variable Declared with `const`

```js
function testScope() {
  for (let i = 0; i < 3; i++) {
    const value = i * 2;
    console.log(value); // ✅ Accessible here
  }

  console.log(value); // ❌ ReferenceError
}

testScope();

```

### Example3: Variable Declared with `var` (Not Recommended)
```js
function testScope() {
  for (var i = 0; i < 3; i++) {
    var result = i + 1;
  }

  console.log(result); // ✅ Accessible
}

testScope();
```