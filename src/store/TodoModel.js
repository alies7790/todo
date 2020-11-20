import {makeObservable,action,observable} from 'mobx'


export default class TodoModel{
    
    constructor(store,title,completed,id){
        this.title=title
        this.completed=completed
        this.id=id
        this.store=store
        makeObservable(this,{
            title:observable,
            completed:observable,
            toggle:action
        })
        
    }

    toggle(){
        this.completed= !this.completed
    }
}



