import React from 'react'

import history from '../../history'

import s from './style.module.scss'
import {useStore} from "effector-react";
import {bookService} from "../../services/book-service/book-service";

const Books = () => {
    const books = useStore(bookService.$books)

    const handleClick = (id:number) => {
        history.push(`/book/${id}`);
    }

    React.useEffect(() => {
        bookService.getBookEvent()
    }, [])

    return (
        <div className={s.main}>
            {books != null ? books.map((book, index) => (
                <div className={`${s.book} card mycard`} onClick={() => handleClick(book.id)}>
                    <img className="card-img-top" src={`http://localhost:8090/api/v1/book/logo/${book.id}`} alt={book.name} />
                    <div className="card-body">
                        <h5 className="card-title">{book.name}</h5>
                        <p className="card-text">{book.description.split('\\n').map(a => <p>{a}</p>)}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{book.time}</small>
                    </div>
                </div>
            )) : <div>Нет книг</div>}
        </div>
    )
}

export default Books
