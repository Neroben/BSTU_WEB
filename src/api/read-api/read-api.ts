import http from "../../http";
import {Read} from "./type";
import {IRead} from "../../services/read-service/type";

const ReadApi = {
    getBookChapter: async (data: Read) => {
        const books = await http.get<IRead>(`/book/chapter/${data.bookId}/${data.chapter}`, {
            headers: {
                'Authorization' : `Bearer ${data.token}`,
            }
        })
        return books.data
    }
}

export default ReadApi;