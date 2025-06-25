// // Write your code here
// import './index.css'

// const TodoItem = props => {
//   const {todoValue, deleteTodo} = props
//   const {title, id} = todoValue
//   const onDelete = () => {
//     deleteTodo(id)
//   }
//   return (
//     <div className="main-bg">
//       <p className="main-para">{title}</p>
//       <button type="button" className="main-button" onClick={onDelete}>
//         Delete
//       </button>
//     </div>
//   )
// }

// export default TodoItem

// src/components/TodoItem/index.js
import './index.css'

const TodoItem = props => {
  const {todoValue, deleteTodo} = props
  const {title, id} = todoValue

  const onDelete = () => deleteTodo(id)

  return (
    <li className="todo-item">
      <p className="todo-title">{title}</p>
      <button type="button" className="main-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
