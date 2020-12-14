import {createReEffect} from "effector-reeffect";
import {createDomain} from "effector";
import CommentApi from "../../api/comment-api/comment-api";
import {IComments} from "./type";

const getCommentFx = createReEffect({handler: CommentApi.getLastComments})

const commentDomain = createDomain('comment domain');

const getLastComments = commentDomain.createEvent()

const $comments = commentDomain.createStore<IComments[] | null>(null)
    .on(getCommentFx.doneData, (_, comments) => comments)

getLastComments.watch(() => getCommentFx(localStorage.getItem('token') ?? ''))

export const commentsService = {
    $comments,
    getLastComments
}