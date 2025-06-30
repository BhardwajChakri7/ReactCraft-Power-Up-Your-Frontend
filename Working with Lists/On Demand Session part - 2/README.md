
# 📇 Contacts App - Final Guide

This document covers essential concepts and code practices used in building the **Contacts App** in React, including the use of third-party packages like `uuid`, best practices, and methods to update properties in object lists.

---

## 🔌 Third-Party Packages

In React development, **third-party packages** are external libraries that simplify or enhance certain functionalities. One such useful package is `uuid`, which helps generate unique identifiers.

---

## 📦 Installing UUID

The `uuid` package is used to generate universally unique identifiers (UUIDs), which are helpful when rendering lists and assigning unique keys to items.

### 🛠️ Install using npm:

```bash
npm install uuid
````

---

## 📥 Importing UUID

After installing, you can import `uuid` into your React component using the ES6 import syntax:

```js
import { v4 as uuidv4 } from 'uuid';
```

* `v4` stands for Version 4 UUIDs (randomly generated).
* `uuidv4()` generates a new unique ID.

---

## ✅ Best Practice

* Always use a unique `key` when rendering lists in React.
* Avoid using `array index` as `key`; prefer stable and unique identifiers like UUIDs.
* Store constants or reusable values outside render functions for better performance.

---

## 🔄 Updating a Property of an Item Inside a List

Suppose you have a list of contact objects and want to toggle a property like `isFavorite`. Use the `map()` function to iterate through the list and update the specific item.

### Example:

```js
const toggleFavorite = id => {
  setContactsList(prevList =>
    prevList.map(contact =>
      contact.id === id
        ? { ...contact, isFavorite: !contact.isFavorite }
        : contact
    )
  );
};
```

* `prevList.map()` iterates over the list.
* If `contact.id` matches the selected `id`, a new object is returned with the toggled `isFavorite` property.
* `...contact` ensures immutability by copying the rest of the fields.

---

## 📄 Contacts App - Final Code Example

Here’s the full structure using all concepts mentioned above:

```js
import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

const initialContactsList = [
  {
    id: uuidv4(),
    name: 'Alice',
    mobileNo: '9876543210',
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Bob',
    mobileNo: '9123456780',
    isFavorite: true,
  },
]

class ContactsApp extends Component {
  state = {
    contactsList: initialContactsList,
  }

  toggleFavorite = id => {
    this.setState(prevState => ({
      contactsList: prevState.contactsList.map(eachItem =>
        eachItem.id === id
          ? { ...eachItem, isFavorite: !eachItem.isFavorite }
          : eachItem
      ),
    }))
  }

  render() {
    const { contactsList } = this.state
    return (
      <div>
        <h1>Contacts List</h1>
        <ul>
          {contactsList.map(each => (
            <li key={each.id}>
              {each.name} - {each.mobileNo} -{' '}
              <button onClick={() => this.toggleFavorite(each.id)}>
                {each.isFavorite ? 'Unfavorite' : 'Favorite'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ContactsApp
```

---

## 🧠 Summary

| Concept                 | Description                                       |
| ----------------------- | ------------------------------------------------- |
| `uuid`                  | Generates unique IDs for list keys or object IDs  |
| `v4`                    | Random UUID version 4                             |
| `setState` with `map()` | Updates a specific item in an object list         |
| `...spread operator`    | Ensures immutability by copying object properties |
| `key` in JSX            | Essential for React to track changes in lists     |

---
