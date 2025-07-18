# 3. Route Parameters

When a component is rendered using `Route`, it receives some special props:

- `match`
- `history`
- `location`

## 3.1 history
The `history` object allows programmatic navigation and maintains the route history.

### Methods:
- `history.push('/route')`  
  Adds a new entry to the history stack. The user can go back.

- `history.replace('/route')`  
  Replaces the current entry. The user cannot go back.

- `go()`
- `goBack()`
- `goForward()`

### Example Syntax:

```js
history.push('/home');
history.replace('/login');
