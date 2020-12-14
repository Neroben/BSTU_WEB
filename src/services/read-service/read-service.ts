import {createReEffect} from "effector-reeffect";
import {createDomain} from "effector";
import ReadApi from "../../api/read-api/read-api";
import {IRead} from "./type";


const getReadFx = createReEffect({handler: ReadApi.getBookChapter})

const readDomain = createDomain('read domain');

const getBookChapter = readDomain.createEvent()

const $read = readDomain.createStore<IRead | null>(null)
    .on(getReadFx.doneData, (_, read) => read)

export const readService = {
    $read,
    getBookChapter
}