import React from 'react'
import Book from "./Book";


const getBook = () => {
    return {
        id: Date.now(),
        author: 'John Doe',
        title: 'The Super Book',
        year: 2021,
        averageRating: 5,
        comments: [
            {id: Date.now() + 1, name: 'Dan', comment: 'Lol', rating: 5},
            {id: Date.now() + 2, name: 'Kris', comment: 'Wow', rating: 5}
        ]
    }
}

export const BookContext = React.createContext()


export default class AppClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            book: getBook()
        }
    }

    addComment = (comment) => {
        const newComments = [...this.state.book.comments]
        newComments.push({...comment, id: Date.now(), rating: +comment.rating})
        let averageScore = Math.round(newComments.reduce((current, comment) => current + comment.rating, 0) / newComments.length)
        this.setState({...this.state, book: {...this.state.book, averageRating: averageScore, comments: newComments}})

    }

    render() {
        return (
            <section className="container pt-3">
                <BookContext.Provider value={{addComment: this.addComment}}>
                    <Book book={this.state.book}/>
                </BookContext.Provider>
            </section>)
    }
}
