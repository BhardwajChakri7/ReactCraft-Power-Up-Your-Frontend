# React Routing Common Mistakes (Part 2)

## 5. Missing `Switch`

### Mistake:

Without `Switch`, all routes that match a path prefix will render.

```jsx
// ❌ Incorrect
<Route path="/" component={Home} />
<Route path="/about" component={About} />
```

### Solution:

Wrap routes inside `Switch` to render only the first match.

```jsx
// ✅ Correct
import { Switch, Route } from 'react-router-dom';

<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
</Switch>
```

---

## 6. Placing Common Component Inside `Switch`

### Mistake:

Placing components like `Header` or `Footer` inside `Switch` causes them to render only on specific routes.

```jsx
// ❌ Incorrect
<Switch>
  <Header />
  <Route path="/" component={Home} />
</Switch>
```

### Solution:

Place common components outside `Switch`.

```jsx
// ✅ Correct
<Header />
<Switch>
  <Route path="/" component={Home} />
</Switch>
```

---

## 7. Providing the Same Path for Multiple Routes

### Mistake:

Multiple routes have the same path.

```jsx
// ❌ Incorrect
<Switch>
  <Route path="/about" component={About1} />
  <Route path="/about" component={About2} />
</Switch>
```

### Solution:

Each route should have a unique path or use conditional rendering in one component.

```jsx
// ✅ Correct
<Route path="/about" component={About} />
```

Or:

```jsx
// ✅ Conditional Rendering
<Route path="/about" render={() => (condition ? <About1 /> : <About2 />)} />
```

---

## 8. Missing Colon `:` in Path Parameters

### Mistake:

Defining dynamic routes without colon prefix.

```jsx
// ❌ Incorrect
<Route path="/user/id" component={UserProfile} />
```

### Solution:

Add `:` before the parameter name.

```jsx
// ✅ Correct
<Route path="/user/:id" component={UserProfile} />
```

And access with `props.match.params.id` (class) or `useParams()` (hook).

```jsx
// Functional Component
const { id } = useParams();
```
