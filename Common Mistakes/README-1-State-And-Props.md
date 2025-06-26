Here is your complete `README.md` file content with all the points formatted clearly for Part 1: **State and Props Mistakes in React**:

---

````markdown
# ⚛️ React Mistakes Part 1: State and Props

Understanding how state and props work is fundamental to React. However, they are often misused. This document covers the most common pitfalls developers face when working with state and props.

---

## 📌 1. Using `setState` Incorrectly

### ❌ Mistake:
```js
this.setState({
  count: this.state.count + 1,
})
````

### ✅ Correct:

```js
this.setState(prevState => ({
  count: prevState.count + 1,
}))
```

✅ **Always use the functional form when the next state depends on the previous state.**

---

## 📌 2. Directly Modifying State

### ❌ Mistake:

```js
this.state.count = 10; // Never do this
```

### ✅ Correct:

```js
this.setState({ count: 10 });
```

🚫 **React won’t detect state changes if you mutate state directly.**

---

## 📌 3. Forgetting Prop Validation

### ❌ Mistake:

```js
<MyComponent />
```

### ✅ Correct:

```js
<MyComponent title="Hello World" />
```

🧪 **You should define `PropTypes` or use TypeScript to avoid passing wrong or missing props.**

---

## 📌 4. Confusing Props and State

| Use Case           | Props | State |
| ------------------ | :---: | :---: |
| Passed from parent |   ✅   |   ❌   |
| Internal data      |   ❌   |   ✅   |
| Immutable          |   ✅   |   ❌   |
| Mutable            |   ❌   |   ✅   |

🔄 **Understand the difference between parent-supplied data and local component data.**

---

## 📌 5. Not Lifting State Up When Needed

If two sibling components need the same data, lift the state up to their common parent instead of duplicating it.

☝️ **Avoid prop drilling or unnecessary duplication by organizing your state smartly.**

---
