import {constant} from './../constants/constant'
import fetch from 'isomorphic-fetch'

export function addTodo(text) {
    return {
        type: constant.ACTIONS.ADD,
        text
    }
}

export function toggleTodo(index){
    return {
        type:constant.ACTIONS.TOGGLE,
        id:index
    }
}

export function setVisibilityFilter(filter){
    return {
        type:constant.ACTIONS.SET_VISIBILITY,
        filter:filter
    }
}

function requestPosts(subreddit) {
    return {
        type:constant.REQUEST.REQUEST_POSTS,
        subreddit
    }
}

function receivePosts(subreddit,json){
    return {
        type:constant.REQUEST.RECEIVE_POSTS,
        subreddit,
        posts:json.data.children.map(child => child.data),
        receivedAt:Date.now()
    }
}

export function fetchPosts(subreddit){
    let url = '1.json';
    return function(dispatch){
        dispatch(receivePosts(subreddit));
        return fetch(url).then(response => response.json())
    }
}
