import React from 'react'

import history from '../../history'

import { books } from '../../dataMain'

import s from './style.module.scss'

const Books = () => {

    const handleClick = () => {
        history.push('/book');
    }

    return (
        <div className={s.main}>
            {books.map((book) => (
                <div className={`${s.book} card mycard`} onClick={handleClick}>
                    <img className="card-img-top" src={book.image} alt={book.header} />
                    <div className="card-body">
                        <a href="#">
                            <h5 className="card-title">{book.header}</h5>
                        </a>
                        <p className="card-text">{book.description}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{book.lastUpdate}</small>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Books
