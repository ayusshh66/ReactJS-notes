import { useContext, createContext } from "react";
// import { useState } from "react";


export const TodoContext = createContext({
    // GIVING DETAILS FOR THE TODO LIST
    todos : [{
        // ID TO RECOGNISE TODO
        id : 1,
        // todo FOR THE TODO INPUT
        todo : 'todo message',
        //
        complete : false

    }],
    // IN addTodo WE ONLY NEED THE TODO CUZ WE ARE ADDING IT, IT DOES NTO REQ ID
    addTodo : (todo) => {},
    // IN deleteTodo WE ONLY NEED ID, CUZZ WE HAVE TO JUST CLICK DELETE BUTTON
    deleteTodo : (id) =>{},
    //IN updateTodo WE NEED ID AND TODO, CUZ TO UPDATE WE NEED TO CLICK ON BUTTON WHICH REQUIRES ID AND FOR UPDATING THE INPUT VALUE WE NEED TODO.
    updateTodo : (id, todo) => {},
    // IN toggleTodo WE NEED ONLY ID CUZ WE ARE CLICK A BUTTON
    toggleTodo : (id) => {}


})


export const ContextProvider = TodoContext.Provider

export function useTodo(){
    return useContext(TodoContext)
}