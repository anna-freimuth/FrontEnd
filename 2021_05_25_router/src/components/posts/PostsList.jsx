import React, {useContext, useEffect, useState, Fragment} from 'react';
import {userContext} from "../App";
import Loading from "../Loading";
import {URL} from "../../data";

const PostsList = () => {
    const [postsList, setPostsList] = useState([])
    const context = useContext(userContext)

    useEffect(() => {
        fetchingData()
    }, []);

    useEffect(() => {
        fetchingData()
    }, [context.user]);

    const fetchingData = () => {
        fetch(`${URL}posts?userId=${context.user.id}`)
            .then(data => data.json())
            .then(json => setPostsList(json))
    }

    const renderPostsList = () => {
        if ( !postsList.length ) {
            return (<Loading />)
        }
        return (
            postsList.map(item => (<div id={'post_' + item.id} key={item.id}>{item.title}</div>))
        )
    }

    return (
        <Fragment>
            <div className="container w-auto mx-auto">
                <div className="col-md-6 align-content-center">
            <div className="card">
            {renderPostsList()}
            </div>
            </div>
                </div>
        </Fragment>

    )

}

export default PostsList