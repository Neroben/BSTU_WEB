import React from 'react'
import Books from '../../components/Books/Books'
import Comments from '../../components/Comments/Comments'

import s from './style.module.scss'
import Header from "../../components/header/Header";

const MainPage = () => {

    React.useEffect(() => {
        localStorage.setItem('token', window.location.href.split('/')[4])
    }, [])

    return (
        <div>
            <Header/>
            <div className={`${s.main} col-lg-10 col-xl-10 offset-lg-1 offset-xl-1`}>
                <div>
                    <Books/>
                </div>
                <Comments/>
            </div>
        </div>
    )
}

export default MainPage
