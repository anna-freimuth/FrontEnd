import React, {useContext, useEffect, useState, Fragment} from 'react';
import {userContext} from "../App";
import Loading from "../Loading";
import {URL} from "../../data";

const ToDoList = () => {
    const [todoList, setTodoList] = useState([])
    const context = useContext(userContext)

    useEffect(() => {
        fetchingData()
    }, []);

    useEffect(() => {
        fetchingData()
    }, [context.user]);

    const fetchingData = () => {
        fetch(`${URL}todos?userId=${context.user.id}`)
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
            <div className="container w-auto mx-auto">
                <div className="col-md-8 align-content-center">
            <div className="card">
            {renderTodoList()}
        </div>
            </div>
            </div>
        </Fragment>

    )

}

export default ToDoList
