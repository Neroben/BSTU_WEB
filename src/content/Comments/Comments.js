import React, {Component} from "react"
import './Comments.css'
import Comment from "../Comment/Comment";

class Comments extends Component{

    render() {
        const comments = this.props.comments.map(comment =>
                <Comment key={comment.id} comment={comment}/>
            )
        return(
            <div className="high">
                <div className="panel-heading">
                    Последние комментарии
                </div>
                {comments}
            </div>
            )

    }
}

export default Comments

