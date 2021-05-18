import React from "react";
import {BookContext} from "./AppClass";

const getClearComment = () => {
    return {
        name: '',
        comment: '',
        rating: 0
    }
}


export default class NewCommentClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ...getClearComment()
        }

    }

    onChangeHandle = event => {
        this.setState(() => {
            return {...this.state, [event.target.name]: event.target.value}
        })
    }



    render() {
        return (
            <BookContext.Consumer>
                {(ctn) => {
                    const onClickHandle = (event) => {
                        event.preventDefault();
                        if (this.state.name.trim() === '' || this.state.comment.trim() === '' || this.state.rating === 0) {
                            return
                        }

                        ctn.addComment(this.state)
                        this.setState(getClearComment)
                    }
                    return (
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="h4 card-title">Add new comment</div>
                                <div className="mb-3">
                                    <label htmlFor="nameText" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        id="nameText"
                                        name="name"
                                        placeholder="Your Name here"
                                        value={this.state.name}
                                        onChange={this.onChangeHandle}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="commentText" className="form-label">Comment</label>
                                    <textarea
                                        className="form-control form-control-sm"
                                        id="commentText"
                                        rows="3"
                                        name="comment"
                                        value={this.state.comment}
                                        onChange={this.onChangeHandle}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Rating</label>
                                    <select className="form-select"
                                            aria-label="Default select example"
                                            name="rating"
                                            value={this.state.rating}
                                            onChange={this.onChangeHandle}
                                    >
                                        <option>Chose a score</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <button type="button" className="btn btn-sm btn-success" onClick={onClickHandle}>Send
                                </button>
                            </div>
                        </div>)
                }
                }</BookContext.Consumer>)

    }
}
