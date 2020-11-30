import React from 'react'

import './style.css'

const RegPage = () => {
    return (
        <div className="wrapper">
            <div className="col-md-6">
                <form className="form-horizontal">
                    <span className="heading">РЕГИСТРАЦИЯ</span>
                    <div className="form-group">
                        <input type="email" className="form-control" id="inputEmail" placeholder="E-mail" />
                        <i className="fa fa-user"></i>
                    </div>
                    <div className="form-group help">
                        <input type="password" className="form-control" id="inputPassword1" placeholder="Password" />
                        <i className="fa fa-lock"></i>
                        <a href="#" className="fa fa-question-circle"></a>
                    </div>
                    <div className="form-group help">
                        <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
                        <i className="fa fa-lock"></i>
                        <a href="#" className="fa fa-question-circle"></a>
                    </div>
                    <div className="main-btn form-group">
                        <button type="submit" className="btn btn-default">
                            ЗАРЕГИСТРИРОВАТЬ
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegPage
