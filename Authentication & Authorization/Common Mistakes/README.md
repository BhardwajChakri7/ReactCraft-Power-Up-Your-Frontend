# ⚛️ React Common Mistakes Cheat Sheet — Part 3

This document highlights **common mistakes** developers make in React applications—especially when working with **class components**, **React Router**, and **form handling**. Each section explains the **mistake**, provides an **explanation**, and shows the correct **solution**.

---

## 📌 1. User Defined Functions Should Be in Arrow Function Syntax

### ❌ Mistake:
Using traditional function syntax inside class components:

```js
onChangeUsername(event) {
  this.setState({ username: event.target.value });
}
````

### ❗ Why It's a Problem:

In class components, regular function definitions do **not** bind `this` automatically, leading to `undefined` errors.

### ✅ Correct Approach:

Use arrow functions to retain the correct `this` context:

```js
onChangeUsername = event => {
  this.setState({ username: event.target.value });
}
```

---

## 🚫 2. Using `<Redirect />` Component Inside Event Handlers

### ❌ Mistake:

```js
onClickHandler = () => {
  return <Redirect to="/home" />;
};
```

### ❗ Why It's a Problem:

`<Redirect />` returns JSX and is meant to be used **inside render()**, not inside event handlers or callbacks.

### ✅ Correct Approach:

Use the `history` object (from `react-router-dom`) for navigation in event handlers:

```js
onClickHandler = () => {
  const { history } = this.props;
  history.replace('/home');
};
```

---

## ⚠️ 3. Using `history.replace()` in the `render()` Method

### ❌ Mistake:

```js
render() {
  this.props.history.replace('/home');
  return null;
}
```

### ❗ Why It's a Problem:

The `render()` method is expected to return JSX. Calling `history.replace()` causes side-effects, which should be avoided during rendering.

### ✅ Correct Approach:

Use `<Redirect />` to navigate conditionally in the render method:

```js
render() {
  const { shouldRedirect } = this.state;

  if (shouldRedirect) {
    return <Redirect to="/home" />;
  }

  return (
    <form>...</form>
  );
}
```

---

## 🔁 4. Missing `withRouter()` to Access `history` Prop

### ❌ Mistake:

Trying to use `this.props.history` in components that are not rendered by `Route`.

### ❗ Why It's a Problem:

Only components rendered through `<Route>` automatically get the `history`, `location`, and `match` props.

### ✅ Correct Approach:

Wrap your component with `withRouter()` HOC:

```js
import { withRouter } from 'react-router-dom';

class Header extends Component {
  logout = () => {
    const { history } = this.props;
    history.replace('/login');
  };

  render() {
    return <button onClick={this.logout}>Logout</button>;
  }
}

export default withRouter(Header);
```

---

## 📤 5. Incorrect Keys in Request Objects

### ❌ Mistake:

```js
const userDetails = { userName, password }; // Incorrect key 'userName'
```

### ❗ Why It's a Problem:

The backend may expect keys like `username` and `password`, and any mismatch will cause authentication failure or errors.

### ✅ Correct Approach:

Ensure keys exactly match backend requirements:

```js
const userDetails = { username, password }; // Correct key 'username'
```

---

## ❗ 6. Not Updating State on Login Failure

### ❌ Mistake:

Login fails but no error is shown because state is not updated:

```js
if (!response.ok) {
  // no state update, so no UI feedback
}
```

### ❗ Why It's a Problem:

The user won’t receive any feedback for failed login attempts.

### ✅ Correct Approach:

Update the relevant state on failure to show the error message:

```js
if (!response.ok) {
  const data = await response.json();
  this.setState({
    showSubmitError: true,
    errorMsg: data.error_msg,
  });
}
```

---

## ✅ Summary Table

| Mistake ID | Issue                        | Solution                                      |
| ---------- | ---------------------------- | --------------------------------------------- |
| 1          | Function not in arrow syntax | Use arrow functions to retain `this` context  |
| 2          | Redirect in handler          | Use `history.push()` or `history.replace()`   |
| 3          | Side effects in `render()`   | Use `<Redirect />` inside `render()`          |
| 4          | Missing `history` prop       | Wrap component with `withRouter()`            |
| 5          | Incorrect request keys       | Match API spec (e.g., `username`, `password`) |
| 6          | State not updated            | Update state on errors to show messages       |

---

## 🙌 Best Practices

* ✅ Always use **arrow functions** for custom methods in class components.
* ✅ Avoid placing **side effects in `render()`**.
* ✅ Use **`withRouter()`** for components that need navigation control.
* ✅ Match **request keys exactly** with backend expectations.
* ✅ Update **state properly** to reflect all UI changes and errors.

---
