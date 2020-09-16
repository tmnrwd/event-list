import React from 'react';
import BookList from './BookList'
import AddBook from './AddBook'
import DeleteBook from './DeleteBook'
import SearchBook from './SearchBook'
import { ApiClient } from './ApiClient'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
          books: [
            {
          "id": 0,
          "title": "Finn Flamerider",
          "author": "Tim Norwood",
          "read": false
        }
      ]
    }
    this.ApiClient = new ApiClient();
    this.updateBookList = this.updateBookList.bind(this);
  }

grabList = () => {
  axios.get("https://cors-anywhere.herokuapp.com/https://agile-reaches-34490.herokuapp.com/booklist")
  .then((response) => {
    this.updateBookList(response);
  })
}

updateBookList = (response) => {
  console.log("Book List update response is", response)
  const bookArray = response.data
  this.setState(() => ({
    books: bookArray
  }));
}

newBook(id, title, author, read) {
  axios.post(`https://cors-anywhere.herokuapp.com/https://agile-reaches-34490.herokuapp.com/booklist/create`,
    {
        id: id,
        title: title,
        author: author, 
        read: read
    }
    )
}

deleteBook(id) {
  axios.delete(`https://cors-anywhere.herokuapp.com/https://agile-reaches-34490.herokuapp.com/booklist/${id}`,
    {
        id: id
    }
    )
}

updateBook(id, title, author, read) {
  return axios.put(`https://cors-anywhere.herokuapp.com/https://agile-reaches-34490.herokuapp.com/booklist/${id}`,
  {
      title: title,
      author: author, 
      read: read
  }
  )
  .then(this.status)
  .catch(function (error) {
    console.error(error);
    alert(error)
  })
}

searchBookByID(id) {
  axios.get(`https://cors-anywhere.herokuapp.com/https://agile-reaches-34490.herokuapp.com/booklist/${id}`)
  .then(function (response) {
    console.log(response);
  })
  .then = (response) => {
    this.updateBookList(response);
  }
}

render() {
  return (
    <>
    <BookList books={this.state.books}/>
    <SearchBook onSubmit={ (id) => this.searchBookByID(id)} />
    <AddBook onSubmit={ (id, title, author, read) => this.newBook(id, title, author, read)} />
    <br></br>
    <Form>
    <Button onClick={this.grabList}>Update List</Button>
    </Form>
    <h4>Edit Book Entry</h4>
    <AddBook onSubmit={ (id, title, author, read) => this.updateBook(id, title, author, read)} />
    <h4>Delete Book</h4>
    <DeleteBook onSubmit={ (id) => this.deleteBook(id)} />
    </>
  );
}
}

export default App;
