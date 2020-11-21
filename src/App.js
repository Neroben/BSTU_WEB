import React from "react";
import Navbar from "../src/navigation/Navbar"
import BookCards from "./content/BookCards";
import books from "./content/books"

function App() {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <BookCards books={books}/>
                </div>
            </div>
        </div>
    )
}

export default App;
