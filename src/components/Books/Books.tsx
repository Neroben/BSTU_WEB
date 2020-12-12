import React from 'react'

import history from '../../history'

import { books as BookData } from '../../dataMain'

import s from './style.module.scss'
import {useStore} from "effector-react";
import {bookService} from "../../services/book-service/book-service";

const Books = () => {
    const books = useStore(bookService.$books)

    const handleClick = () => {
        history.push('/book');
    }

    React.useEffect(() => {
        bookService.getBookEvent()
    }, [])

    return (
        <div className={s.main}>
            {books != null ? books.map((book, index) => (
                <div className={`${s.book} card mycard`} onClick={handleClick}>
                    <img className="card-img-top" src={BookData[index].image} alt={book.name} />
                    <div className="card-body">
                        <a href="#">
                            <h5 className="card-title">{book.name}</h5>
                        </a>
                        <p className="card-text">{book.description}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{BookData[index].lastUpdate}}</small>
                    </div>
                </div>
            )) : <div>Нет книг</div>}
        </div>
    )
}

export default Books
