import React from 'react'

import history from '../../history'

import s from './style.module.scss'

const Header = () => {
    const handleClick = () => {
        history.push('/main')
    }

    const handleClickLogout = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#f90' }}>
            <a className="navbar-brand" href="#" onClick={handleClick}>
                Boo
            </a>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            Моя библиотека<span className="sr-only">(current)</span>
                        </a>
                    </li>
                </ul>
                <button className={`${s.leftBtn} btn btn-outline-dark my-2 my-sm-0`} onClick={handleClickLogout}>
                    Выйти
                </button>
            </div>
        </nav>
    )
}

export default Header
