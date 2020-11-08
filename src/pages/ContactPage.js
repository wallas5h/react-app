import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
import '../styles/ContactPage.css'

class ContactPage extends Component {
  state = {
    value: "",
    isEmpty: true
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      value: "",
    })
  }

  handleChange = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        value: e.target.value,
        isEmpty: false
      })
    } else {
      this.setState({
        isEmpty: true
      })
    }
  }
  handleClick = () => {
    this.setState({
      value: "",
      isEmpty: false
    })
  }

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas</h3>
          <textarea value={this.state.vale} onChange={this.handleChange} placeholder='wpisz wiadomość...' ></textarea>
          <br />
          <button onClick={this.handleClick}>Wyślij</button>
        </form>
        <Prompt
          when={this.state.value}
          message='Nie wysłano formularza, czy chcesz opuścić formularz?'
        />
      </div>
    );
  }
}

export default ContactPage;