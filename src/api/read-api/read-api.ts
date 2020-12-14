import http from "../../http";
import {Read} from "./type";
import {IRead} from "../../services/read-service/type";

const ReadApi = {
    getBookChapter: async (data: Read) => {
        const books = await http.get<IRead>(`/book/all/${data.bookId}`, {
            headers: {
                'Authorization' : `Bearer ${data.token}`,
            },
            params: {
                "chapter" : data.chapter,
            }
        })
        return books.data
    }
}

export default ReadApi;