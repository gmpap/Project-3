import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Login extends Component {
  static propTypes = {
    prop: PropTypes
  };

  state = {
    email: '',
    password: ''
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
