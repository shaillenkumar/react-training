import React from 'react';

const BookCard = ({book}) => {
    return(
        <div className="card">
            <div className="row">
                <div className="col-md-4">
                    <img src={book.bookImg} alt={book.bookTitle} style={{width: '100px', height: '100px'}} className="card-img" />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{book.bookTitle}</h5>
                        <div className="card-text">{book.author}</div>
                        <div className="card-text">{book.genre}</div>
                    </div>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-link text-danger">x</button>
                </div>
            </div>
        </div>
    );
}
export default BookCard;

