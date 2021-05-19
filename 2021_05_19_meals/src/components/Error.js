import React from "react";

export default ({message = "Sorry, something went wrong. Please try again later."}) => {
    return (
        <div className="d-flex justify-content-center mt-3">
            <div className="alert alert-danger" role="alert">{message}</div>
        </div>

    )
}