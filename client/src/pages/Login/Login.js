import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, FormBtn } from './../../components/Form';
export default class Login extends Component {
  static propTypes = {
    prop: PropTypes
  };

  state = {
    email: '',
    password: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  

  render() {
    return (
      <form>
        <Input
          value={this.state.email}
          onChange={this.handleInputChange}
          name='email'
          placeholder='Enter your Login email (required)'
        />

        <Input
          value={this.state.password}
          onChange={this.handleInputChange}
          name='password'
          placeholder='Enter a valid password (required)'
        />

        <FormBtn
          disabled={!(this.state.email && this.state.password)}
          onClick={this.handleFormSubmit}
        >
          Login
        </FormBtn>
      </form>
    );
  }
}
