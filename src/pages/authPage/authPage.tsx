import React from 'react'
import history from "../../history";

const AuthPage = () => {

    React.useEffect(() => {
        if (localStorage.getItem('token') == null)
            localStorage.setItem('token', window.location.href.split('/')[4])
        history.push("/main")
    }, [])

    return (
        <div> </div>
    )
}

export default AuthPage;
