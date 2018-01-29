import React, { Component } from "react";
import Field from "./field.js";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstName: "",
        lastName: "",
        phone: "",
        email: ""
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    const { firstName, lastName, phone, email } = this.state.form;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>First Name</div>
        <Field
          name="firstName"
          label="First Name"
          type="text"
          value={firstName}
          onChange={this.handleInputChange}
        />
        <div>Last Name</div>
        <Field
          name="lastName"
          label="Last Name"
          type="text"
          value={lastName}
          onChange={this.handleInputChange}
        />
        <div>Phone Number</div>
        <Field
          name="phone"
          label="Phone Number"
          type="tel"
          value={phone}
          onChange={this.handleInputChange}
        />
        <div>Email</div>
        <Field
          name="email"
          label="Email"
          type="email"
          value={email}
          onChange={this.handleInputChange}
        />

        <button>Add Contact</button>
      </form>
    );
  }
  handleInputChange(event) {
    const { value, name } = event.target;
    const { form } = this.state;
    form[name] = value;
    this.setState({
      form: { ...form }
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit called, form values are:", this.state.form);

    this.props.add(this.state.form);
  }
}

export default ContactForm;
