import {createDomain} from 'effector'
import {createReEffect} from 'effector-reeffect'
import BookApi from "../../api/book-api/book-api";
import {IBooks} from "./type";

const getBookFx = createReEffect({handler: BookApi.getAllBook})

const bookDomain = createDomain('book domain');

const getBookEvent = bookDomain.createEvent()

const $books = bookDomain.createStore<IBooks[] | null>(null)
    .on(getBookFx.doneData, (_, books) => books)

getBookEvent.watch(() => getBookFx(localStorage.getItem('token') ?? ''))


export const bookService = {
    $books,
    getBookEvent
}