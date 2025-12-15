# JavaScript Execution Context & Call Stack Analysis

This document provides a **clear and structured explanation** of how JavaScript executes code internally.  
It focuses on **Execution Contexts**, **Memory Allocation**, and the **Call Stack lifecycle** using a practical example.

---

## 1. Execution Context Diagrams (GEC & FEC)

This section explains the **Creation Phase (CP)** and **Execution Phase (EP)** for each execution context involved in the program.

---

## Phase A: Global Execution Context (GEC)

The **Global Execution Context** is created when the JavaScript file is first loaded.

### Creation Phase (Memory Allocation)

During this phase, memory is allocated **before any code is executed**.

- `window` → Global Object
- `this` → refers to `window`
- `message` → `<uninitialized>`  
  _(Const is hoisted but remains in the Temporal Dead Zone)_
- `sum`, `mul`, `calc`, `getResult` →  
  Function definitions are **fully hoisted** and stored in memory (Heap)

### Execution Phase (Code Execution)

- `message` is assigned the value `"I can do it"`
- `getResult(8, 5)` is invoked  
  → This creates **Function Execution Context 1 (FEC 1)**

---

## Phase B: Function Execution Contexts (FEC)

Each function call creates a **new execution context**, which is pushed onto the **Call Stack**.

---

### FEC 1: `getResult(8, 5)`

#### Creation Phase

- `arguments`: `{ 0: 8, 1: 5, length: 2 }`
- `a` → `8`
- `b` → `5`

#### Execution Phase

- Calls `calc(8, 5)`
- A new execution context (**FEC 2**) is created
- Execution pauses until FEC 2 returns

---

### FEC 2: `calc(8, 5)`

#### Creation Phase

- `arguments`: `{ 0: 8, 1: 5, length: 2 }`
- `a` → `8`
- `b` → `5`

#### Execution Phase

- Calls `sum(8, 5)`  
  → Creates **FEC 3**
- Waits for `sum` to return `13`
- Calls `mul(8, 5)`  
  → Creates **FEC 4**
- Waits for `mul` to return `40`
- Calculates `(13 + 40) / 2`
- Returns `26.5` to FEC 1
- Context is destroyed and popped from the stack

---

### FEC 3: `sum(8, 5)`

#### Creation Phase

- `a` → `8`
- `b` → `5`
- `result` → `<uninitialized>`

#### Execution Phase

- `result = 8 + 5`
- Returns `13`
- Context is destroyed (popped off the stack)

---

### FEC 4: `mul(8, 5)`

#### Creation Phase

- `a` → `8`
- `b` → `5`
- `result` → `<uninitialized>`

#### Execution Phase

- `result = 8 * 5`
- Returns `40`
- Context is destroyed (popped off the stack)

---

## 2. Stack and Heap Flow

This section illustrates **where data is stored** during execution.

