import React from "react";
import Navbar from "../src/navigation/Navbar"
import BookCards from "./content/BookCards/BookCards";
import Comments from "./content/Comments/Comments"
import books from "./content/books"
import comments from "./content/comments"

import './app.css'

function App() {
    return (
        <div>
            <Navbar/>
            <div className="main">
                <div className="row">
                    <BookCards books={books}/>
                    <Comments comments={comments}/>
                </div>
            </div>
        </div>
    )
}

export default App;
