
import React, { Component } from 'react';

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'components/Form';
  }

  render() {
    return (
      <form data-component-name={this.displayName} className="form-inline" onSubmit={(e)=>{  e.preventDefault();return false; }}>
        {this.props.children}
      </form>
    );
  }
}
