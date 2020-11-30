import React from 'react'
import Books from '../../components/Books/Books'
import Comments from '../../components/Comments/Comments'

import s from './style.module.scss'

const MainPage = () => {
    return (
        <div className={`${s.main} col-lg-10 col-xl-10 offset-lg-1 offset-xl-1`}>
            <div>
                <Books />
            </div>
            <Comments />
        </div>
    )
}

export default MainPage
