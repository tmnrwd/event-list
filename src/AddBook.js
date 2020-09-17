import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AddBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "id": 0,
            "title": "",
            "author": "",
            "read": false
        }
    }

handleChange(event) {
        const newState = {};
        if (event.target.name === 'read'){
            newState[event.target.name] = !this.state.read
        }
        else { newState[event.target.name] = event.target.value }
        this.setState(newState)
}

submitHandler(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.id, this.state.title, this.state.author, this.state.read);
    this.setState({
        id: 0,
        title: "",
        author: "",
        read: false
    })
}

render() {
        return (
            <>
            <Form onSubmit={(e) => this.submitHandler(e)}>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" type="text" value={this.state.title} onChange={(e) => this.handleChange(e)}></Form.Control>
                </Form.Group>
                <Form.Group controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control name="author" type="text" value={this.state.author} onChange={(e) => this.handleChange(e)}></Form.Control>
                </Form.Group>
                <Form.Group controlId="read">
                    <Form.Check name="read" type="checkbox" label="read" value={this.state.read} onChange={(e) => this.handleChange(e)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Book
                </Button>
            </Form>
            </>
        );
    }
}

export default AddBook;