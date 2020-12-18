import React from 'react'
import Books from '../../components/Books/Books'
import Comments from '../../components/Comments/Comments'

import s from './style.module.scss'
import Header from "../../components/header/Header";
import {authService} from "../../services/auth-service/auth-service";

const MainPage = () => {

    React.useEffect(() => {
        if (localStorage.getItem('token') == null)
            localStorage.setItem('token', window.location.href.split('/')[4])
    }, [])

    React.useEffect(() => {
        authService.checkTokenEvent()
    }, [])

    return (
        <div>
            <Header/>
            <div className={`${s.main} col-lg-10 col-xl-10 offset-lg-1 offset-xl-1`}>
                <div>
                    <Books/>
                </div>
                <Comments/>
            </div>x
        </div>
    )
}

export default MainPage
