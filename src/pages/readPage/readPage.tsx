import React from 'react'

import Header from "../../components/header/Header";
import {authService} from "../../services/auth-service/auth-service";
import {useStore} from "effector-react";
import {readService} from "../../services/read-service/read-service";

const ReadPage = () => {

    const read = useStore(readService.$read)

    React.useEffect(() => {
        authService.checkTokenEvent()
    }, [])

    React.useEffect(() => {
        readService.getBookChapter()
    }, [])

    return (
        <div>
            <Header/>
            <div style={{margin: '20px 10% 0 10%'}}>
                {read != null ? read.text.split('\\n').map(a => <p>{a}</p>):''}
            </div>
        </div>
    )
}

export default ReadPage
