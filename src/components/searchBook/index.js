import React from 'react';
import Form from 'react-bootstrap/Form';
const SearchBook = ({handleBook}) => {
    return (
        <>
            <Form.Group>
                <Form.Control size="lg" type="text" placeholder="Search Book By Title" onChange={handleBook} />
            </Form.Group>
        </>
    )
}
export default SearchBook;