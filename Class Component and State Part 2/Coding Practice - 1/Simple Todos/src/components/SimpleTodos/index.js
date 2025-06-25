import './index.css'
import {Component} from 'react'
import TodoItem from '../TodoItem'

const giveninitialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {initialTodosList: giveninitialTodosList}

  deleteTodo = id => {
    this.setState(prevState => ({
      initialTodosList: prevState.initialTodosList.filter(
        each => each.id !== id,
      ),
    }))
  }

  render() {
    const {initialTodosList} = this.state

    return (
      <div className="main-bg-container">
        <div className="sub-bg-container">
          <h1 className="main-heading">Simple Todos</h1>

          <ul className="list-of-todos">
            {initialTodosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoValue={eachTodo}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos

// class SimpleTodos extends Component {
//   state = {initialTodosList: giveninitialTodosList}

//   deleteTodo = id => {
//     const {initialTodosList} = this.state
//     const filterTodoList = initialTodosList.filter(each => each.id !== id)
//     this.setState({initialTodosList: filterTodoList})
//   }

//   render() {
//     return (
//       <div className="main-bg-container">
//         <div className="sub-bg-container">
//           <h1 className="main-heading">Simple Todos</h1>
//           <ul className="list-of-todos">
//             {giveninitialTodosList.map(eachTodo => (
//               <TodoItem
//                 todoValue={eachTodo}
//                 key={eachTodo.id}
//                 deleteTodo={this.deleteTodo}
//               />
//             ))}
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }
// export default SimpleTodos
