import React, { useState, useEffect } from 'react';
import Book from './../book/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBook from '../searchBook';

const BookList = ({ books }) => {

    const [search, setSearch] = useState("");
    const [filteredBook, setFilteredBook] = useState([]);


    const handleBook = event => {
        setSearch(event.target.value);
    };


    useEffect(() => {
        setFilteredBook(
            books.filter((book) =>
                book.title.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, books]);


    return (
        <Container>
            <Row>
                <Col>
                    <SearchBook handleBook={handleBook} />
                </Col>
            </Row>
            <Row>
                {
                    filteredBook.map((book, key) => {
                        return (
                            <Col sm key={book.id}>
                                <Book book={book} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}
export default BookList;