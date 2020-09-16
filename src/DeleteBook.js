import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class DeleteBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

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
                <Form.Group controlId="taskID">
                    <Form.Label>Book ID</Form.Label>
                    <Form.Control name="id" type="number" value={this.state.id} onChange={(e) => this.handleChange(e)}></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Delete
                </Button>
            </Form>
            </>
        );
    }
}

export default DeleteBook;