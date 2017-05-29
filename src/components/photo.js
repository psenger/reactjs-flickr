
import PropTypes from "prop-types";
import React, { Component } from 'react';

export default class Photo extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'components/Photo';
    this.getPhotoUrl = this.getPhotoUrl.bind(this);
  }

  getPhotoUrl(photo) {
    return `http://farm${photo.farm}.static.flickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
  }

  render() {
    let { photo} = this.props;
    return (<img className="col-lg-1" data-component-name={this.displayName} id={photo.id} src={this.getPhotoUrl(photo)} alt={photo.title} aria-label={photo.title}/>);
  }
}

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
};
