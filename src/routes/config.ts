import {lazy} from 'react'
import {AppRoute} from "./types";

const MainPage = lazy(() => import('../pages/mainPage/mainPage'));
const LoginPage = lazy(() => import('../pages/loginPage/loginPage'));
const ReadPage = lazy(() => import('../pages/readPage/readPage'));
const RegPage = lazy(() => import('../pages/regPage/regPage'));

export const routes: AppRoute[] = [
    {
        title: 'Boo',
        path: '/',
        component: MainPage,
        exact: true,
    },
    {
        title: 'Вход',
        path: '/login',
        component: LoginPage,
        exact: true,
    },
    {
        title: 'Регистрация',
        path: '/reg',
        component: RegPage,
        exact: true,
    },
    {
        title: 'Boo',
        path: '/book',
        component: ReadPage,
        exact: true,
    },
]
