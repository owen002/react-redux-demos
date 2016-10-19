import React, {Component, PropTypes} from 'react'

class Todo extends Component {
    render() {
        return (
            <li onClick={this.props.onClick} className={this.props.complete?"todo-complete-li":''}
                style={{cursor:this.props.complete?'default':'pointer'}}>{this.props.text}</li>
        )
    }
}
Todo.propTypes = {
    onClick:PropTypes.func.isRequired,
    text:PropTypes.string.isRequired,
    complete:PropTypes.bool.isRequired
}
export default Todo;