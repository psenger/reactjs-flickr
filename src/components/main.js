
import PropTypes from "prop-types";
import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'components/Main';
  }

  render() {
    let { title } = this.props;
    return (
      <main data-component-name={this.displayName}>
        <h1>{title || ''}</h1>
        {this.props.children}
      </main>
    );
  }
}

Main.propTypes = {
  title: PropTypes.string.isRequired
};
