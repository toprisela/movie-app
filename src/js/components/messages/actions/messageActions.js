import { ADD_MESSAGE, DELETE_MESSAGE } from '../../../enums/actionTypes'

export function addMessage(message){
    return {
        type: ADD_MESSAGE,
        payload: message
    }
}

export function deleteMessage(id){
    return {
        type: DELETE_MESSAGE,
        payload: id
    }
} 