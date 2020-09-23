import React from 'react';
import AddEvent from './AddEvent'
import UpdateEvent from './UpdateEvent'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

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
          <td>
            {current._id}
          </td>
          <td>
          <button onClick={() => this.deleteEvent(current._id)}>Delete</button>
          </td>
        </tr>
      ))
    } else {
      return this.events.map((current) => (
        <tr key={current.id}>
          
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
          <td>
            {current.id}
          </td>
          <td>
          <button onClick={() => this.deleteEvent(current._id)}>Delete</button>
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
          <Table striped bordered hover>
            <thead>
              <tr>
                <td>Name</td>
                <td>Location</td>
                <td>Precis</td>
                <td>Date</td>
                <td>Time</td>
                <td>ID</td>
                <td>Delete</td>
              </tr>
              </thead>
            <tbody>
              {this.createList()}
            </tbody>
          </Table>
        </div>
<br></br>
        <h3>Add Event to List</h3>
        <AddEvent onSubmit={(id, name, location, precis, date, time) => this.createEvent(id, name, location, precis, date, time)} />
        <br></br>
        <h4>Edit Event Entry</h4>
        <UpdateEvent onSubmit={(id, name, location, precis, date, time) => this.updateEvent(id, name, location, precis, date, time)} />
        <br></br>
        <Button onClick= {this.props.logout} >Logout</Button>
      </>
    );
  }
}

export default EventList;