import {constant} from './../constants/constant'
import {combineReducers} from 'redux'

function todos(state = [], action) {
    switch (action.type) {
        case constant.ACTIONS.ADD:
            return [
                ...state, {
                    text: action.text,
                    complete: false
                }
            ];
        case constant.ACTIONS.TOGGLE:
            return state.map((val, index)=> {
                if (index == action.id) {
                    return Object.assign({}, val, {
                        complete: !val.complete
                    })
                }
                return val;
            });
        default:
            return state
    }
}

function visibilityFilter(state = constant.VISIBILITY.SHOW_ALL, action){
    switch (action.type) {
        case constant.ACTIONS.SET_VISIBILITY:
            return action.filter;
        default:
            return state;
    }
}

// function todo(state = {}, action) {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todoApp(state.todos, action)
//     }
// }

const todo = combineReducers({todos, visibilityFilter});
export default todo;