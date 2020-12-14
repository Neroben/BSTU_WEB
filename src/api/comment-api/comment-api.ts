import http from "../../http";
import {IComments} from "../../services/comments-service/type";

const CommentApi = {
    getLastComments: async (token: String) => {
        const comments = await http.get<IComments[]>('/comments/last', {
            headers: {
                'Authorization' : `Bearer ${token}`,
            }
        })
        return comments.data
    }
}

export default CommentApi;