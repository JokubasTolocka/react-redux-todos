import React, {Component} from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import {addTodo, removeTodo} from './actions';
import {Route} from 'react-router-dom';
import TodoForm from './TodoForm';

class TodoList extends Component {
    constructor(props){
        super(props);  
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(val){
        this.props.addTodo(val);
    }

    removeTodo( id){
        this.props.removeTodo(id);
    }

    render(){
        console.log(this.props.todos);
        let todos = this.props.todos.map((val, index) => (
            <Todo 
                removeTodo={this.removeTodo.bind(this,val.id)} 
                task={val.task} 
                key={index} 
            />));
        return(
            <div>
                <Route path='/todos/new' component={props => 
                    <TodoForm {...props} handleSubmit={this.handleAdd}/>
                }/>
                <Route exact path='/todos' component={() => <div><ul>{todos}</ul></div>}/>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        todos: reduxState.todos
    };
}

export default connect(mapStateToProps, {addTodo, removeTodo})(TodoList);