import React from 'react';

class BookList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.createList = this.createList.bind(this);
  }

  createList = () => {
    let type = typeof(response)
    if (type !== "array")
    {
      let bookList = this.props.books;
      bookList = Array.from(bookList)
      return bookList.map((current) => (
        <tr key={current.id}>
          <td>
            {current.id}
          </td>
          <td>
            {current.title}
          </td>
          <td>
            {current.author}
          </td>
          <td>
            {current.read ? "Read" : "Unread"}
          </td>
        </tr>
      ))
    } else {
    return this.props.books.map((current) => (
      <tr key={current.id}>
        <td>
          {current.id}
        </td>
        <td>
          {current.title}
        </td>
        <td>
          {current.author}
        </td>
        <td>
          {current.read ? "Read" : "Unread"}
        </td>
      </tr>
    )
    )
    }
  }  

render() {
  return (
    <div>
      <h1>Book List</h1>
      <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Read</th>
            </tr>
          </thead>
          <tbody>
            {this.createList()}
          </tbody>
    </div>
  );
}
}

export default BookList;