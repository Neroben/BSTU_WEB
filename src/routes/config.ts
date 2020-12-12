import {lazy} from 'react'
import {AppRoute} from "./types";

const MainPage = lazy(() => import('../pages/mainPage/mainPage'));
const LoginPage = lazy(() => import('../pages/loginPage/loginPage'));
const ReadPage = lazy(() => import('../pages/readPage/readPage'));

export const routes: AppRoute[] = [
    {
        title: 'Вход',
        path: '/',
        component: LoginPage,
        exact: true,
    },
    {
        title: 'Boo',
        path: '/main',
        component: MainPage,
        exact: true,
    },
    {
        title: 'Boo',
        path: '/book',
        component: ReadPage,
        exact: true,
    },
    {
        title: 'getToken',
        path: '/authorize/',
        component: MainPage,
        exact: false,
    },
]
