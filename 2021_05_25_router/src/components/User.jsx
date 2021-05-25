import React, {useContext, useEffect, useState} from 'react';
import {userContext} from "./App";
import Loading from "./Loading";
import {URL} from "../data";

const User = () => {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        fetchingUsers()
    }, [])

    const fetchingUsers = () => {
        fetch(`${URL}users`)
            .then(response => response.json())
            .then(json => setUsers(json))
    }

    const context = useContext(userContext)

    const renderUsers = () => {
        if (!users) return (<Loading/>)
        return (
            users.map(user => (<button key={user.id} onClick={() => context.changeUser(user)}>{user.username}</button>))
        )
    }

    const renderActiveUser = () => {
        if (!context.user) return null
        return (
            <div className="col-md-3">
            <div className="card">
                <hr/>
                <h5 className="card-title">
                {context.user.name}</h5>
                    ({context.user.email})
                <hr/>
            </div>
            </div>
        )
    }

    return (
        <section>
            <div className="collection-item">
            {renderUsers()}
        </div>
            {renderActiveUser()}
        </section>
    )
}

export default User
