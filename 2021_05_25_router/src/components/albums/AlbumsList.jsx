import React, {useContext, useEffect, useState, Fragment} from 'react';
import {userContext} from "../App";
import Loading from "../Loading";
import {URL} from "../../data";

const AlbumsList = () => {
    const [albumsList, setAlbumsList] = useState([])
    const context = useContext(userContext)

    useEffect(() => {
        fetchingData()
    }, []);

    useEffect(() => {
        fetchingData()
    }, [context.user]);

    const fetchingData = () => {
        fetch(`${URL}albums?userId=${context.user.id}`)
            .then(data => data.json())
            .then(json => setAlbumsList(json))
    }

    const renderAlbumsList = () => {
        if (!albumsList.length) {
            return (<Loading/>)
        }
        return (
            albumsList.map(item => (<div id={'album_' + item.id} key={item.id}>{item.title}</div>))
        )
    }

    return (
        <Fragment>
            <div className="container w-auto mx-auto">
            <div className="col-md-6 align-content-center">
                <div className="card">
                    {renderAlbumsList()}
                </div>
            </div>
            </div>
        </Fragment>

    )

}

export default AlbumsList