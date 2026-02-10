import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import Price from './Price'

const Book = ({ book }) => {
    const [img, setImg] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const image = new Image();
        image.src = book.url;
        image.onload = () => {
            setImg(image);
            setLoading(false)
            };
        }, [book.url]);

    return(
       <div className="book">
        {loading ? (
            <>
            <div className="book__img--skeleton"></div>
            <div className="skeleton book__title--skeleton"></div>
            <div className="skeleton book__rating--skeleton"></div>
            <div className="skeleton book__price--skeleton"></div>
            </>
        ) : (
            <>
             <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
            <img src={img.src} 
            alt="" 
            className="book__img" />
        </figure>
             </Link>
    <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
        {book.title}
        </Link>
    </div>
        <Rating rating={book.rating}/>
        <Price salePrice={book.salePrice} 
        originalPrice={book.originalPrice}/>
            </>
        )}          
    </div> 
    )
}

export default Book