## **1. Execution Context Diagrams (GEC & FEC)**

This section explains the **Creation Phase (CP)** and **Execution Phase (EP)** for each execution context involved in the program.

---

### **Phase A: Global Execution Context (GEC)**

The **Global Execution Context** is created when the JavaScript file is first loaded.

#### **Creation Phase (Memory Allocation)**

During this phase, memory is allocated before any code is executed:

* **`window`** → Global Object
* **`this`** → Refers to `window`
* **`message`** → `<uninitialized>` (a `const` variable is hoisted but remains in the *Temporal Dead Zone*)
* **`sum`**, **`mul`**, **`calc`**, **`getResult`** → `function { ... }` (fully hoisted and stored in the Heap)

#### **Execution Phase (Code Execution)**

* `message` is assigned the value **"I can do it"**.
* `getResult(8, 5)` is invoked → **Function Execution Context 1 (FEC 1)** is created.

---

### **Phase B: Function Execution Contexts (FEC)**

Each function call creates its own execution context, which goes through both creation and execution phases.

---

#### **FEC 1: `getResult(8, 5)`**

**Creation Phase:**

* **`arguments`** → `{ 0: 8, 1: 5, length: 2 }`
* **`a`** → 8
* **`b`** → 5

**Execution Phase:**

* Calls `calc(8, 5)` → **FEC 2** is created.
* Execution pauses until **FEC 2** returns a value.

---

#### **FEC 2: `calc(8, 5)`**

**Creation Phase:**

* **`arguments`** → `{ 0: 8, 1: 5, length: 2 }`
* **`a`** → 8
* **`b`** → 5

**Execution Phase:**

* Calls `sum(8, 5)` → **FEC 3** is created.

  * Waits for `sum` to return **13**.
* Calls `mul(8, 5)` → **FEC 4** is created.

  * Waits for `mul` to return **40**.
* Computes **(13 + 40) / 2**.
* Returns **26.5** to **FEC 1** → context is destroyed.

---

#### **FEC 3: `sum(8, 5)`**

**Creation Phase:**

* **`a`** → 8
* **`b`** → 5
* **`result`** → `<uninitialized>`

**Execution Phase:**

* `result` is assigned **13** (`8 + 5`).
* Returns **13** → context is destroyed and popped off the stack.

---

#### **FEC 4: `mul(8, 5)`**

**Creation Phase:**

* **`a`** → 8
* **`b`** → 5
* **`result`** → `<uninitialized>`

**Execution Phase:**

* `result` is assigned **40** (`8 × 5`).
* Returns **40** → context is destroyed and popped off the stack.

---

## **2. Stack and Heap Flow**

This section illustrates how JavaScript stores data in **Stack Memory** and **Heap Memory** during program execution.

```text
      STACK MEMORY                         HEAP MEMORY
 (Primitive values & References)      (Objects & Functions)
      +---------------+                 +-----------------+
      |               |                 |                 |
      | [FEC: mul]    | ----------------> func mul() {..} |
      | a=8, b=5      |                 |                 |
      | result=40     |                 |                 |
      |               |                 | func sum() {..} |
      +---------------+                 |                 |
      |               |                 |                 |
      | [FEC: calc]   | ----------------> func calc(){..} |
      | a=8, b=5      |                 |                 |
      +---------------+                 |                 |
      |               |                 | func getResult()|
      | [FEC: getRes] | ----------------> { ... }         |
      | a=8, b=5      |                 |                 |
      +---------------+                 | "I can do it"   |
      |               |                 +-----------------+
      | [GEC]         |
      | message="..." |
      +---------------+
```

---

## **3. Call Stack Diagram (LIFO)**

The **Call Stack** operates using the **Last-In, First-Out (LIFO)** principle. Below is a step-by-step visualization of how the stack changes during execution.

---

### **Step 1: Initial Call**

`getResult(8, 5)` is pushed onto the stack.

```text
|                  |
|                  |
| [FEC: getResult] |
|_[______GEC_____]_|
```

---

### **Step 2: Inside `calc()`**

`getResult` calls `calc`.

```text
|                  |
|   [FEC: calc]    |
| [FEC: getResult] |
|_[______GEC_____]_|
```

---

### **Step 3: Calculating Sum**

`calc` calls `sum`.

```text
|    [FEC: sum]    |  ← Returns 13, then pops
|   [FEC: calc]   |
| [FEC: getResult]|
|_[______GEC_____]_|
```

---

### **Step 4: Calculating Multiplication**

`sum` has returned. `calc` now calls `mul`.

```text
|    [FEC: mul]    |  ← Returns 40, then pops
|   [FEC: calc]   |
| [FEC: getResult]|
|_[______GEC_____]_|
```

---

### **Step 5: Unwinding the Stack**

* `mul` pops off the stack.
* `calc` computes **(13 + 40) / 2 = 26.5**, returns the value, and pops.
* `getResult` returns **26.5** and pops.

✅ The Call Stack is now empty, except for the **Global Execution Context**.
