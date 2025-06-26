Sure! Here's **Part 2** of the series: **Common Mistakes in React - Component Lifecycle and Effects** — properly formatted for a single `README.md` file:

---

````markdown
# ⚛️ React Mistakes Part 2: Component Lifecycle and Effects

React’s lifecycle methods and the `useEffect` hook are powerful tools, but they're also prone to misusage. This guide highlights common mistakes developers make and how to avoid them.

---

## 📌 1. Using `useEffect` Without a Dependency Array

### ❌ Mistake:
```js
useEffect(() => {
  fetchData();
});
````

### ✅ Correct:

```js
useEffect(() => {
  fetchData();
}, []);
```

⚠️ Without the dependency array, the effect runs **on every render**, which can cause performance issues or infinite loops.

---

## 📌 2. Providing Incorrect Dependencies in `useEffect`

### ❌ Mistake:

```js
useEffect(() => {
  console.log(user.name);
}, []); // Missing user in dependencies
```

### ✅ Correct:

```js
useEffect(() => {
  console.log(user.name);
}, [user]);
```

🔍 Always include **all external variables** used inside the effect in the dependency array.

---

## 📌 3. Causing Memory Leaks in Effects

### ❌ Mistake:

```js
useEffect(() => {
  const interval = setInterval(() => {
    console.log('Running...');
  }, 1000);
}, []);
```

### ✅ Correct:

```js
useEffect(() => {
  const interval = setInterval(() => {
    console.log('Running...');
  }, 1000);

  return () => clearInterval(interval); // Cleanup!
}, []);
```

🧹 Always clean up side effects like timers, subscriptions, or event listeners to prevent memory leaks.

---

## 📌 4. Not Understanding Component Mounting and Unmounting

* `componentDidMount` (Class) = `useEffect(..., [])` (Function)
* `componentWillUnmount` (Class) = `useEffect` cleanup function

💡 Use cleanup in `useEffect` to simulate `componentWillUnmount`.

---

## 📌 5. Triggering Infinite Loops with State Inside `useEffect`

### ❌ Mistake:

```js
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

🚫 This will trigger an infinite loop, because `setCount` updates state which triggers another render.

### ✅ Fix:

Avoid setting state unless necessary, or add guards:

```js
useEffect(() => {
  if (count < 5) {
    setCount(count + 1);
  }
}, [count]);
```

---

