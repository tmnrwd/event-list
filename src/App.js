import React from 'react';
import BookList from './BookList'
import AddBook from './AddBook'
import DeleteBook from './DeleteBook'
import UpdateBook from './UpdateBook'
import SearchBook from './SearchBook'
import { ApiClient } from './ApiClient'
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
          books: [
            {
          "id": 0,
          "title": "Loading...",
          "author": "",
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
    .then((response) => {
      this.grabList(response);
    })
}

deleteBook(id) {
  axios.delete(`https://cors-anywhere.herokuapp.com/https://agile-reaches-34490.herokuapp.com/booklist/${id}`,
    {
        id: id
    }
    )
    .then((response) => {
      this.grabList(response);
    })
}

updateBook(id, title, author, read) {
  axios.put(`https://cors-anywhere.herokuapp.com/https://agile-reaches-34490.herokuapp.com/booklist/${id}`,
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
  .then((response) => {
    this.grabList(response);
  })
}

IDsearch(id) {
  axios.get(`https://cors-anywhere.herokuapp.com/https://agile-reaches-34490.herokuapp.com/booklist/${id}`)
  .then((response) => {
    const search = response.data
    let array = [search]
    this.setState(() => ({
      books: array
    }))
  })
  }

componentDidMount(){
  this.grabList()
}

render() {
  return (
    <>
    <BookList books={this.state.books}/>
    <br></br>
    <h3>Book Search</h3>
    <SearchBook onSubmit={ (id) => this.IDsearch(id)} />
    <br></br>
    <Form><Button onClick={this.grabList}>Display Entire List</Button></Form>
    <br></br>
    <h3>Add Book to List</h3>
    <AddBook onSubmit={ (id, title, author, read) => this.newBook(id, title, author, read)} />
    <br></br>
    <h4>Edit Book Entry</h4>
    <UpdateBook onSubmit={ (id, title, author, read) => this.updateBook(id, title, author, read)} />
    <br></br>
    <h4>Delete Book</h4>
    <DeleteBook onSubmit={ (id) => this.deleteBook(id)} />
    </>
  );
}
}

export default App;
