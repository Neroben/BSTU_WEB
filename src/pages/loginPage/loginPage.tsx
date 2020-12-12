import React from 'react';
import history from "../../history";

import './style.css';

const LoginPage = () => {
    function handleClick() {
        console.log("Нажал");
        window.location.href = "http://localhost:8090/oauth2/authorize/vk";
    }

    return (
        <div className="wrapper">
            <div className="col-md-6">
                <form className="form-horizontal">
                    <span className="heading">АВТОРИЗАЦИЯ ВК</span>
                    <div className="main-btn form-group">
                        <button onClick={handleClick} type="button" className="btn btn-default">ВХОД</button>
                    </div>
                </form>
            </div>
        </div>)
}

export default LoginPage;
