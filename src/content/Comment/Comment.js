import React from 'react';
import "./Comment.css"

const Comment = (props) => {
    return (
        <div className="item">
            <section className="top">
                <article className="author">
                    {props.comment.author}
                </article>
                <article className="time">
                    {props.comment.time}
                </article>
            </section>
            <section className="bottom">
                <article className="title">
                    {props.comment.text}
                </article>
            </section>
        </div>
    )
}

export default Comment;