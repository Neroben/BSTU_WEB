import http from '../../http'
import {IBooks} from "../../services/book-service/type";

const BookApi = {
    getAllBook: async (token: String) => {
        const books = await http.get<IBooks[]>('/book/all', {
            headers: {
                'Authorization' : `Bearer ${token}`,
            }
        })
        return books.data
    }
}

export default BookApi;