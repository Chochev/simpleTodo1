import React from 'react'
// this is functional component i will pass the state into this comp
//i made the object to represent the props and we passed todos and delete todos
const Todos = ({todos, deleteTodo}) => {
//check operator for f or t for my todoList
    const todoList = todos.length ? (
        //i've passed with map method to check the todo's
        todos.map(todo => {
            //return jsx for each todo
            return (
                // the unique key for the ellem. when we pass the mapp function for output  inin the brawser
                <div key={todo.id}>
                    {/* with the span tag i show the todo's (i pass the prop content(todo.content)) ;
                    with onClick and delete function i delete the
                    todos when we click them */}
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        // instead of return null i return p tag with message that we have not todo's left
        <p> You have no todos left</p>
    )
    return(
        // output the todos
        <div > 
             {todoList}
        </div>
    )
}

export default Todos