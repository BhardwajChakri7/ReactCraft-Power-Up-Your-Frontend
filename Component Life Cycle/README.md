### ✅ 1. Component Lifecycle Phases Overview

Each React Class Component goes through 3 main phases:

1. **Mounting** – component is being created and inserted into the DOM.
2. **Updating** – component is re-rendered due to changes in props or state.
3. **Unmounting** – component is removed from the DOM.

---

### ✅ 2. Mounting Phase Syntax

#### 2.1 `constructor()`

Used for initializing state and binding methods.

```jsx
constructor(props) {
  super(props); // Must call super(props) before using 'this'
  this.state = {
    time: new Date(),
  };
}
```

#### 2.2 `render()`

Returns JSX to render in the UI.

```jsx
render() {
  return (
    <div>
      <h1>Current Time</h1>
      <p>{this.state.time.toLocaleTimeString()}</p>
    </div>
  );
}
```

#### 2.3 `componentDidMount()`

Called once immediately after the component is mounted.

```jsx
componentDidMount() {
  this.timerID = setInterval(() => this.tick(), 1000);
}
```

---

### ✅ 3. Updating Phase Syntax

Occurs when `setState()` is called.

#### 3.1 `render()` (again)

It is re-invoked when state or props change.

```jsx
tick = () => {
  this.setState({
    time: new Date(),
  });
};
```

---

### ✅ 4. Unmounting Phase Syntax

#### 4.1 `componentWillUnmount()`

Called before the component is destroyed.

```jsx
componentWillUnmount() {
  clearInterval(this.timerID);
}
```

---

### ⏰ Clock Component Full Example

```jsx
import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      time: new Date(),
    });
  };

  render() {
    return (
      <div>
        <h1>Current Time</h1>
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
```
