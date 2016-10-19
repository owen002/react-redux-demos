import React, {Component} from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'
import {connect} from 'react-redux'
import * as actions from './../actions'
import {constant} from './../constants/constant'
import {createSelector} from 'reselect'

class App extends Component {
    render() {
        const {dispatch, todos, visibilityFilter} = this.props;
        console.log('connect.props:', this.props);
        return (
            <div>
                <AddTodo onAddClick={
                text => dispatch(actions.addTodo(text))
                }>
                </AddTodo>

                <TodoList todos={todos} onTodoClick={
                index => dispatch(actions.toggleTodo(index))
                }>
                </TodoList>

                <Footer filter={visibilityFilter} onFooterClick={
                (filter)=> dispatch(actions.setVisibilityFilter(filter))}>
                </Footer>
            </div>
        )
    }
}

// function todosFilter(todos, filter) {
//     switch (filter) {
//         case constant.VISIBILITY.SHOW_ALL:
//             return todos;
//         case constant.VISIBILITY.SHOW_COMPLETE:
//             return todos.filter(todo=>todo.complete);
//         case constant.VISIBILITY.SHOW_ACTIVE:
//             return todos.filter(todo=>!todo.complete);
//     }
// }
// function select(state) {
//     return {
//         visibilityFilter: state.visibilityFilter,
//         todos: todosFilter(state.todos, state.visibilityFilter)
//     }
// }

const getVisibilityFilter = (state)=> state.visibilityFilter
const getTodos = (state)=> state.todos
const selector = createSelector([getTodos, getVisibilityFilter],
    (todos, filter)=> {
        console.log('computing::...')
        switch (filter) {
            case constant.VISIBILITY.SHOW_ALL:
                return todos;
            case constant.VISIBILITY.SHOW_COMPLETE:
                return todos.filter(todo=>todo.complete);
            case constant.VISIBILITY.SHOW_ACTIVE:
                return todos.filter(todo=>!todo.complete);
        }
    }
)
function select(state) {
    return {
        visibilityFilter: state.visibilityFilter,
        todos: selector(state)
    }
}

export default connect(select)(App)

