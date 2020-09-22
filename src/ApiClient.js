import axios from 'axios'
const url = 'http://localhost:3000/eventlist/'
const urlshort = 'http://localhost:3000/'

export class ApiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider
    this.logoutHandler = logoutHandler
  }

  async login(username, password) {
    return await axios({
      method: 'post',
      url: `${urlshort}auth`,
      header: { authorization: this.tokenProvider() },
      data: {
        username,
        password
      }
    });
  }

  authenticatedCall(method, url, data) {
    return axios({
      method, url, 
      header: { authorization: this.tokenProvider() },
      data
    })
      .catch((error) => {
        if (error.response.status === 403) {
          this.logoutHandler();
          return Promise.reject()
        } else { throw error; }
      })
  }

  status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }

  getEvents() {
    return this.authenticatedCall('get', url)
  }

  newEvent(name, location, precis, date, time) {
    return this.authenticatedCall('post', `${url}create`,
      {
        name,
        location,
        precis,
        date,
        time
      })
  }

  deleteEvent(id) {
    return this.authenticatedCall('delete', `${url}${id}`)
  }

  updateEvent(id, name, location, precis, date, time) {
    return this.authenticatedCall('put', `${url}${id}`, { name, location, precis, date, time })
  }

  returnID(id) {
    return this.authenticatedCall('get', `${url}${id}`)
  }

}