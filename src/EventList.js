import React from 'react';
import AddEvent from './AddEvent'
import DeleteEvent from './DeleteEvent'
import UpdateEvent from './UpdateEvent'
import SearchEvent from './SearchEvent'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class EventList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [

      ]
    }
    this.createList = this.createList.bind(this);
  }


  componentDidMount() {
    this.grabList()
  }


  updateEventList = (response) => {
    const eventArray = response.data
    this.setState(() => ({
      events: eventArray
    }));
  }

  grabList = () => {
    this.props.client.getEvents()
      .then((response) => {
        this.updateEventList(response);
      })
  }

  IDsearch(id) {
    this.props.client.returnID(id)
      .then((response) => {
        const search = response.data
        let array = [search]
        this.setState(() => ({
          events: array
        }))
      })
  }


  createEvent(name, location, precis, date, time) {
    this.props.client.newEvent(name, location, precis, date, time)
      .then((response) => {
        this.grabList(response);
      })
  }

  updateEvent(id, name, location, precis, date, time) {
    this.props.client.updateEvent(id, name, location, precis, date, time)
      .then((response) => {
        this.grabList(response);
      })
      .then(this.status)
      .catch(function (error) {
        // handle error
        console.error(error);
        alert(error)
      })
  }

  deleteEvent(id) {
    this.props.client.deleteEvent(id)
      .then((response) => {
        this.grabList(response);
      })
  }

  createList = () => {
    let type = typeof (response)
    if (type !== "array") {
      let eventList = this.state.events;
      eventList = Array.from(eventList)
      return eventList.map((current) => (
        <tr key={current._id}>
          <td>
            {current._id}
          </td>
          <td>
            {current.name}
          </td>
          <td>
            {current.location}
          </td>
          <td>
            {current.precis}
          </td>
          <td>
            {current.date}
          </td>
          <td>
            {current.time}
          </td>
        </tr>
      ))
    } else {
      return this.events.map((current) => (
        <tr key={current.id}>
          <td>
            {current.id}
          </td>
          <td>
            {current.name}
          </td>
          <td>
            {current.location}
          </td>
          <td>
            {current.precis}
          </td>
          <td>
            {current.date}
          </td>
          <td>
            {current.time}
          </td>
        </tr>
      )
      )
    }
  }

  render() {
    return (
      <>
        <div>
          <h1>The Event List</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Precis</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {this.createList()}
            </tbody>
          </table>
        </div>
        <br></br>
        <h3>Event Search</h3>
        <SearchEvent onSubmit={(id) => this.IDsearch(id)} />
        <br></br>
        <Form><Button onClick={this.grabList}>Display Entire List</Button></Form>
        <br></br>
        <h3>Add Event to List</h3>
        <AddEvent onSubmit={(id, name, location, precis, date, time) => this.createEvent(id, name, location, precis, date, time)} />
        <br></br>
        <h4>Edit Event Entry</h4>
        <UpdateEvent onSubmit={(id, name, location, precis, date, time) => this.updateEvent(id, name, location, precis, date, time)} />
        <br></br>
        <h4>Delete Event</h4>
        <DeleteEvent onSubmit={(id) => this.deleteEvent(id)} />
        <br></br>
        <Button onClick= {this.props.logout} >Logout</Button>
      </>
    );
  }
}

export default EventList;