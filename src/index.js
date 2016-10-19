import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import todo from './reducers'
import App from './components/App'
import React from 'react'
// import * as action from './actions'

let store = createStore(todo)

// store.subscribe(() =>
//     console.log(store.getState())
// )
//
// store.dispatch(action.addTodo('wo de jia zai dongbei!!'));
// store.dispatch(action.addTodo('wo de jia zai xibei!!'));
// store.dispatch(action.addTodo('wo de jia zai dongnan!!'));
// store.dispatch(action.addTodo('wo de jia zai xinan!!'));
// store.dispatch(action.toggleTodo(3));
// store.dispatch(action.showComplete());
// store.dispatch(action.showAll());

let ele = document.getElementById('content');
render(
    <Provider store={store}>
        <App/>
    </Provider>, ele)