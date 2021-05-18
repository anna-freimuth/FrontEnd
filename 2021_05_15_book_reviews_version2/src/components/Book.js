import React from "react";
import Comments from "./Comments";
import NewCommentClass from "./NewCommentClass";

const Book = ({book}) => {

    return (
        <div className="row">
            <div className="col-md-4">
                <div className="card-body-1" >
                    <h4 className="card-title">
                        {book.title}
                    </h4>
                    <h5 className="card-title">
                        {book.author}
                    </h5>
                    <p className="card-text">
                        {book.year}
                    </p>
                    <p className="card-text">Average rating:&nbsp;
                          {book.averageRating}
                    </p>
                </div>
            </div>
            <div className="col-sm-6">
                <NewCommentClass />
                <Comments comments={book.comments}/>
            </div>
        </div>
    )
}

export default Book