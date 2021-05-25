import React from 'react';
import {Route, Switch} from "react-router-dom";
import ToDoList from "./todo/ToDoList";
import PostsList from "./posts/PostsList";
import AlbumsList from "./albums/AlbumsList";


const PageContent = () => {
    return (
        <Switch>
            <Route path="/todo">
                <ToDoList/>
            </Route>,
            <Route path="/post">
                <PostsList/>
            </Route>,
            <Route path="/album">
                <AlbumsList/>
            </Route>
        </Switch>
    )
}

export default PageContent
