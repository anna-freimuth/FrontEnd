import React, {useContext, useEffect, useState} from 'react';
import {userContext} from "./App";
import Loading from "./Loading";

const User = () => {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        fetchingUsers()
    }, [])

    const fetchingUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }

    const cntxt = useContext(userContext)

    const renderUsers = () => {
        if (!users) return (<Loading/>)
        return (
            users.map(user => (<button key={user.id} onClick={() => cntxt.changeUser(user)}>{user.username}</button>))
        )
    }

    const renderActiveUser = () => {
        if (!cntxt.user) return null
        return (
            <div>
                <hr/>
                {cntxt.user.name} ({cntxt.user.email})
                <hr/>
            </div>
        )
    }

    return (
        <section>
            {renderUsers()}
            {renderActiveUser()}
        </section>
    )
}

export default User
