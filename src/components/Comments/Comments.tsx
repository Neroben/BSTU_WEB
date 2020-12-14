import React from 'react'

import s from './style.module.scss'
import {useStore} from "effector-react";
import {commentsService} from "../../services/comments-service/comments-service";
import {bookService} from "../../services/book-service/book-service";

const Comments = () => {

    const comments = useStore(commentsService.$comments)

    React.useEffect(() => {
        commentsService.getLastComments()
    }, [])

    return (
        <div className={s.high}>
            <div className={s.panelHeading}>Последние комментарии</div>
            {comments != null ? comments.map((item) => {
                return (
                    <div className={s.item}>
                        <section className={s.top}>
                            <article className={s.author}>{item.author}</article>
                            <article className={s.time}>{item.time}</article>
                        </section>
                        <section className={s.bottom}>
                            <article className={s.title}>{item.text}</article>
                        </section>
                    </div>
                )
            }): <div>Комментарии отсутствуют</div>
            }
        </div>
    )
}

export default Comments
