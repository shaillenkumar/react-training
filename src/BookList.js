import React from 'react';
import BookCard from './BookCard';

const BookList = ({Books}) => ( 
    <div>
        { Books.map( b => <BookCard book={b} /> )}
    </div>

);

export default BookList;
   


