
import PropTypes from "prop-types";
import React, { Component } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'components/Nav';
  }

  render() {
    let { page, pages } = this.props.stats || { page:1, pages:0 };
    let previousCss = 'btn btn-default nav-btn' + (( page === 1 ) ? ' disabled' : '');
    let nextCss = 'btn btn-default nav-btn' + (( page >= pages ) ? ' disabled' : '');
    let previousDisabled = ( page === 1 );
    let nextDisabled = ( page >= pages );
    return (
      <nav aria-label="Navigation through the pages of flicker images with the given tag." role="toolbar" className="btn-toolbar nav-btnbar" data-component-name={this.displayName}>
        <div className="btn-group nav-btnbar-inner" role="group" aria-label="Navigation through the pages of flicker images with the given tag.">
          <button aria-label="Go to the previous page of images" aria-disabled={previousDisabled} type="button" className={previousCss} onClick={(e)=>{ if (!previousDisabled) this.props.onPrevious(e,-1) } }>Previous</button>
          <button aria-label="Go to the next page of images" aria-disabled={nextDisabled}  type="button" className={nextCss} onClick={(e)=>{ if (!nextDisabled ) this.props.onNext(e,1) } }>Next</button>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  title: PropTypes.string.isRequired
};

