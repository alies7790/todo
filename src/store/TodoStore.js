import {action,observable,makeObservable} from 'mobx'
import TodoModel from './TodoModel'

class TodoStore{
    todos =[]
    lastId=0
    all =true
    active = false
    completes=false
    todosShow=[]
    constructor(){
        makeObservable(this,{
            todos:observable,
            addTodo:action,
            todosShow:observable,
            DeleteTodo:action,
            SetAll:action,
            SetActive:action,
            SetCompletes:action,
            ClearCompleted:action
        })
    }
    SetAll(){
        this.all =true
        this.active = false
        this.completes=false
        this.todosShow=this.todos
    }

    SetActive(){
        this.all =false
        this.active = true
        this.completes=false
        let newTodos=[]
        this.todos.map(todo =>{
            if(todo.completed ===false ){
                newTodos.push(todo)
            }
            return null
        })
         this.todosShow =newTodos

    }

    SetCompletes(){
        this.all =false
        this.active = false
        this.completes=true
        let newTodos=[]
        this.todos.map(todo =>{
            if(todo.completed ===true){
                newTodos.push(todo)
            }
            return null
        })
         this.todosShow =newTodos
    }

    ClearCompleted(){
        let newTodos=[]
        this.todos.map(todo =>{
            if(todo.completed ===false){
                newTodos.push(todo)
            }
            return null
        })
         this.todos =newTodos

         if(this.all ===true ){
            this.SetAll()
        }else if(this.active === true){
            this.SetActive()
        }else{
            this.SetCompletes()
        }
    }



    addTodo(title){
        this.todos.push(new TodoModel(this,title ,false,this.lastId))
        this.lastId+=1
        if(this.all ===true ){
            this.SetAll()
        }else if(this.active === true){
            this.SetActive()
        }else{
            this.SetCompletes()
        }
    }

    DeleteTodo(id1){
        let newTodos=[]
        this.todos.map(todo =>{
            if(todo.id !==id1){
                newTodos.push(todo)
            }
            return null
        })
         this.todos =newTodos
         if(this.all ===true ){
            this.SetAll()
        }else if(this.active === true){
            this.SetActive()
        }else{
            this.SetCompletes()
        }
    }
    
}

const store = new TodoStore()

export default store