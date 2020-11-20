import React,{Component}from 'react'
import {observer} from "mobx-react"

import TodoStore from '../store/TodoStore'

class TodoNavigate extends Component{
    constructor(props){
        super(props);
        this.state=({
            all:false,
            active:false,
            completed:false
        })
    }
    selectAll = ()=>{
        this.setState({
            all:true,
            active:false,
            completed:false
        })   
        TodoStore.SetAll()
    }

    selectActive = () =>{
        this.setState({
            all:false,
            active:true,
            completed:false
        })
        TodoStore.SetActive();
    }

    selectCompleted = () =>{
        this.setState({
            all:false,
            active:false,
            completed:true
        })
        TodoStore.SetCompletes();
    }

    clearCompleted =() =>{
        TodoStore.ClearCompleted();
    }
    
    render(){
        if(TodoStore.todos.length>0){
        return(
            <div className="footer" >
                <button  className="todo-count">
                    <span>{TodoStore.todos.filter(todo => todo.completed === false).length} item left</span>
                </button>

                <ul className="filters">
                    <li onClick={this.selectAll} >
                        <button className={this.state.all ? "selected" : " " }>All</button>
                    </li>
                    <li onClick={this.selectActive} >
                        <button className={this.state.active ? "selected" : " " }>Active</button>
                    </li>
                    <li onClick={this.selectCompleted} >
                        <button className={this.state.completed ? "selected" : " " }>Completed</button>
                    </li>
                </ul>

                <button className="clear-completed" onClick={this.clearCompleted}> clear completed</button>




            </div>
        )}else{
            return null
        }
    }
}

export default observer(TodoNavigate)