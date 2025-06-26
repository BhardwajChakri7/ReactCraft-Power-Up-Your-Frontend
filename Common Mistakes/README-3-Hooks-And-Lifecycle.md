Great! Here's **Part 3** of the series: **Common React Mistakes – Event Handling and Component Structure**, written as a standalone `README.md` file.

---

````markdown
# ⚛️ React Mistakes Part 3: Event Handling and Component Structure

Writing clean, efficient, and bug-free React components depends heavily on how you handle events and structure your components. Let’s walk through some common mistakes and how to fix them.

---

## 📌 1. Binding Event Handlers Incorrectly

### ❌ Mistake:
```js
<button onClick={this.handleClick.bind(this)}>Click Me</button>
````

Binding in the render method causes a **new function** to be created on every render.

### ✅ Correct:

Bind once in the constructor:

```js
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}
```

Or use class fields (public class syntax):

```js
handleClick = () => {
  // arrow function auto-binds
}
```

---

## 📌 2. Forgetting to Prevent Default Behavior

### ❌ Mistake:

```js
<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>
```

### ✅ Correct:

```js
const handleSubmit = e => {
  e.preventDefault();
  // your logic
};
```

🚫 Not calling `preventDefault()` can cause unexpected page reloads.

---

## 📌 3. Overusing Anonymous Functions in JSX

### ❌ Mistake:

```js
<button onClick={() => handleClick(id)}>Click</button>
```

While fine for small apps, this creates **a new function on every render**, affecting performance.

### ✅ Correct:

Use memoized callbacks or wrap in a function:

```js
const onClickHandler = useCallback(() => handleClick(id), [id]);
<button onClick={onClickHandler}>Click</button>
```

---

## 📌 4. Deeply Nested Components (Poor Structure)

🚫 Avoid deeply nesting multiple components in one file. It reduces readability and makes reuse/testing harder.

### ✅ Correct:

Split into separate files:

```sh
/components
  └── Header.jsx
  └── Footer.jsx
  └── TodoItem.jsx
```

📁 Keep components modular and reusable.

---

## 📌 5. Not Using Keys Properly in Lists

### ❌ Mistake:

```js
{items.map(item => (
  <li>{item.name}</li>
))}
```

### ✅ Correct:

```js
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
```

🔑 Keys help React identify which items have changed and optimize rendering. Avoid using indexes as keys unless necessary.

---
