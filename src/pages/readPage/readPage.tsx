import React from 'react'

import Header from "../../components/header/Header";
import {authService} from "../../services/auth-service/auth-service";
import {useStore} from "effector-react";
import {readService} from "../../services/read-service/read-service";
import a from "./style.module.scss"

const ReadPage = () => {

    const read = useStore(readService.$read)

    React.useEffect(() => {
        authService.checkTokenEvent()
    }, [])

    React.useEffect(() => {
        readService.getBookChapter()
    }, [])

    var num = (read == null) ? 0:read.numChapter;
    const size = (read == null) ? 0:read.sizeChapters;

    const url1 = `${(num - 1)}`;
    const url2 = `${num}`;
    const url3 = `${num+1}`;

    const paginations = <ul className={a.pagination}>
        {num-1 >= 0 ? <li className={a.pagination}><a href={url1}>{num}</a></li>:''}
        <li className={a.pagination}><a href={url2}>{num+1}</a></li>
        {num+1 >= size ? '':<li className={a.pagination}><a href={url3}>{num+2}</a></li>}
    </ul>;

    return (
        <div>
            <Header/>
            <div style={{margin: '20px 10% 0 10%'}}>
                {read != null ? read.text.split('\\n').map(a => <p>{a}</p>):''}
            </div>
            {paginations}
        </div>
    )
}

export default ReadPage
