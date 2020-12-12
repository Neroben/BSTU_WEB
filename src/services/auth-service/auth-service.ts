import {createDomain, sample} from 'effector'
import {createReEffect} from 'effector-reeffect'
import AuthApi from "../../api/auth-api/auth-api";
import history from "../../history";

const checkTokenFx = createReEffect({handler: AuthApi.checkToken})

const authDomain = createDomain('auth domain');

const checkTokenEvent = authDomain.createEvent()

checkTokenEvent.watch(() => checkTokenFx(localStorage.getItem('token') ?? ''))

checkTokenFx.fail.watch(() => {
    history.push('/')
})

export const authService = {
    checkTokenEvent
}