import {createReEffect} from "effector-reeffect";
import {createDomain} from "effector";
import ReadApi from "../../api/read-api/read-api";
import {IRead} from "./type";


const getReadFx = createReEffect({handler: ReadApi.getBookChapter})

const readDomain = createDomain('read domain');

const getBookChapter = readDomain.createEvent()

const $read = readDomain.createStore<IRead | null>(null)
    .on(getReadFx.doneData, (_, read) => read)

getBookChapter.watch(() => getReadFx({
    token: localStorage.getItem('token') ?? '',
    bookId: +window.location.href.split('/')[4],
    chapter: +window.location.href.split('/')[5],
}))

export const readService = {
    $read,
    getBookChapter
}