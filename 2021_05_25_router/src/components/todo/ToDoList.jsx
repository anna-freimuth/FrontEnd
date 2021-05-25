import React, {useContext, useEffect, useState, Fragment} from 'react';
import {userContext} from "../App";
import Loading from "../Loading";

const ToDoList = () => {
    const [todoList, setTodoList] = useState([])
    const cntxt = useContext(userContext)

    useEffect(() => {
        fetchingData()
    }, []);

    useEffect(() => {
        fetchingData()
    }, [cntxt.user]);

    const fetchingData = () => {
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${cntxt.user.id}`)
            .then(data => data.json())
            .then(json => setTodoList(json))
    }

    const renderTodoList = () => {
        if ( !todoList.length ) {
            return (<Loading />)
        }
        return (
            todoList.map(item => (<div id={'todo_' + item.id} key={item.id}>{item.title}</div>))
        )
    }

    return (
        <Fragment>
            {renderTodoList()}
        </Fragment>

    )

}

export default ToDoList
