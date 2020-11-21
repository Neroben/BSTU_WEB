import React, {Component} from 'react'

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light" style = {{backgroundColor: '#f90'}}>
                <a className="navbar-brand" href="#">Boo</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBook" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Книги
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownBook">
                                <a className="dropdown-item" href="#">Рекомендуемые</a>
                                <a className="dropdown-item" href="#">Новинки</a>
                                <div className="dropdown-divider"/>
                                <a className="dropdown-item" href="#">Все книги</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Обсуждения<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMeet" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Сообщество
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMeet">
                                <a className="dropdown-item" href="#">Конкурсы</a>
                                <a className="dropdown-item" href="#">Иллюстрации</a>
                                <div className="dropdown-divider"/>
                                <a className="dropdown-item" href="#">Авторы</a>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Моя библиотека<span
                                className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Поиск</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default Navbar;