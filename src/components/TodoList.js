import React, {Component, PropTypes} from 'react'
import Todo from './Todo'

class TodoList extends Component {
    render() {
        return (<ul>
            {this.props.todos.map((todo, index)=>
                <Todo {...todo} todo={todo} key={index} onClick={() =>this.handleToggleClick(index)}></Todo>
            )}
        </ul>)
    }

    handleToggleClick(index) {
        this.props.onTodoClick(index)
    }
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        complete: PropTypes.bool.isRequired
    }).isRequired).isRequired
}
export default TodoList;