# React Routing Common Mistakes (Part 1)

## 1. Rendering Promise Object

### Mistake:

Attempting to render a Promise directly in JSX, such as calling an async function in the render method.

```jsx
// ❌ Incorrect
const BlogsList = () => {
  const blogData = fetchBlogData(); // returns a Promise
  return <div>{blogData}</div>; // Will render [object Promise]
};
```

### Solution:

Make API calls inside `componentDidMount()` (for class components) or `useEffect()` (for functional components).

```jsx
// ✅ Correct (Class Component)
class BlogsList extends Component {
  state = { blogs: [] };

  componentDidMount() {
    fetchBlogData().then(data => this.setState({ blogs: data }));
  }

  render() {
    const { blogs } = this.state;
    return (
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    );
  }
}
```

---

## 2. Using `Link` and `Route` Components without `BrowserRouter`

### Mistake:

Using `Route` or `Link` without wrapping the app inside `BrowserRouter`.

```jsx
// ❌ Incorrect
<Link to="/about">About</Link>
<Route path="/about" component={About} />
```

### Solution:

Wrap your app inside `BrowserRouter`.

```jsx
// ✅ Correct
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}
```

---

## 3. Providing Wrong Route Path

### Mistake:

Incorrect `path` provided to `Route` or `Link`.

```jsx
// ❌ Incorrect
<Route path="about-us" component={About} />
<Link to="/about">About</Link>
```

### Solution:

Make sure both `Route` and `Link` have matching paths.

```jsx
// ✅ Correct
<Route path="/about" component={About} />
<Link to="/about">About</Link>
```

---

## 4. Missing `exact` Keyword

### Mistake:

Without `exact`, multiple routes may match and render.

```jsx
// ❌ Incorrect
<Route path="/" component={Home} />
<Route path="/about" component={About} />
```

### Solution:

Use `exact` to restrict rendering to only exact matches.

```jsx
// ✅ Correct
<Route exact path="/" component={Home} />
<Route path="/about" component={About} />
```
