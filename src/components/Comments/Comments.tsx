import React from 'react'

import { comments } from '../../dataMain'

import s from './style.module.scss'

const Comments = () => {
    return (
        <div className={s.high}>
            <div className={s.panelHeading}>Последние комментарии</div>
            {comments.map((item) => {
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
            })}
        </div>
    )
}

export default Comments
