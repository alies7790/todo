import React, { Component } from "react";
import {observer} from 'mobx-react'
import TodoStore from '../store/TodoStore'
import TodoItem from './TodoItem'

class TodoItems extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
        {
            TodoStore.todosShow.map(todo=>{
              return(
              <TodoItem key={todo.id} todo={todo} TodoStore={TodoStore}/>
              )
            })
          }
        </ul>
      </section>
    );
  }
}
export default observer(TodoItems);
