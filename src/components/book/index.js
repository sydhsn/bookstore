import React from 'react';
import Card from 'react-bootstrap/Card';

const Book = ({ book }) => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={book.thumbnailUrl} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.isbn}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Book;
