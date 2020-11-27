import React from 'react'
import "./BookCard.css"

const BookCard = (props) => {
        const content = props.book;
        return(
            <div className="card mycard">
                <img className="card-img-top" src={content.image} alt={content.header}/>
                    <div className="card-body">
                        <a href="#"><h5 className="card-title">{content.header}</h5></a>
                        <p className="card-text">{content.description}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{content.lastUpdate}</small>
                    </div>
            </div>
        )
}
export default BookCard;