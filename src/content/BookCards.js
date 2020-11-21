import React, {Component} from "react"
import BookCard from "./BookCard";

class BookCards extends Component {

    render() {
        const books = this.props.books.map(book =>
            <BookCard key={book.id} book={book}/>
        )
        console.log(this.props);
        return (
            <div className="col-9">
                <div className="card-deck" style={{marginTop: '10px'}}>
                    {books}
                </div>
            </div>
        )
    }
}

export default BookCards;
