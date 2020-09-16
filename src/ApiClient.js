import axios from 'axios'

export class ApiClient {

  status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }

  getList = () => {
    return this.getRequest("https://cors-anywhere.herokuapp.com/https://agile-reaches-34490.herokuapp.com/booklist")  
  }
  
  getBookByID(id) {
      return this.getRequest(`https://agile-reaches-34490.herokuapp.com/booklist/${id}`)
  }

  getRequest = (url) => {
      return axios.get(url)
      .then(function (response) {
        console.log(response);
      })
      .then = () => (this.status)
      .catch(function (error) {
        console.error(error);
        alert(error)
      })
  }

    addBook(id, title, author, read) {
    return axios.post(`https://agile-reaches-34490.herokuapp.com/booklist/create`,
    {
        id: id,
        title: title,
        author: author, 
        read: read
    }
    )
    .then(this.status)
    .catch(function (error) {
      // handle error
      console.error(error);
      alert(error)
    })
}

deleteBook(id) {
    return axios.delete(`https://agile-reaches-34490.herokuapp.com/booklist/${id}`,
    )
    .then(this.status)
    .catch(function (error) {
      // handle error
      console.error(error);
      alert(error)
    })
}

updateBook(id, title, author, read) {
    return axios.put(`https://agile-reaches-34490.herokuapp.com/booklist/${id}`,
    {
        title: title,
        author: author, 
        read: read
    }
    )
    .then(this.status)
    .catch(function (error) {
      // handle error
      console.error(error);
      alert(error)
    })
}

}