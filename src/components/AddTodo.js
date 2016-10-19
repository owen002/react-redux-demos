import React, {Component,PropTypes} from 'react'
import {findDOMNode} from 'react-dom'

class AddTodo extends Component {
    // <button onClick={this.handleClick.bind(this)}>Add</button>
    render() {
        return (
            <div>
                <input type="text" style={{height:'30px',paddingLeft:'10px'}} placeholder="type in your todos" ref="inputText"/>
                <button style={{marginLeft:'20px',height:'35px'}} onClick={e => this.handleClick(e)}>Add</button>
            </div>
        )
    }

    handleClick(e) {
        var inputNode = findDOMNode(this.refs.inputText);
        var inputValue = inputNode.value.trim();
        if(inputValue){
            this.props.onAddClick(inputValue);
        }else{
            alert('输入不能为空')
        }
        inputNode.value = '';

    }
}
AddTodo.propTypes = {
    onAddClick:PropTypes.func.isRequired
}

export default AddTodo