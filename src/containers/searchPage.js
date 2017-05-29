
import classnames from 'classnames';
import {connect} from "react-redux";
import Main from '../components/main';
import Form from '../components/form';
import Nav from '../components/nav';
import React, {Component} from "react";
import Photo from '../components/photo';
import {bindActionCreators} from "redux";
import Input from '../components/input';
import * as PhotoActions from '../actionCreators/photoActions';

const results = (photos) => ( <div className="container-fluid">
                                { photos.map((photo,index) => (<Photo key={index.toString()} photo={photo} />))}
                              </div>);

const noResults = (tag) => (<div>No results exist for <span className="tag">{tag || 'a blank value' }</span></div>);

const alert = ( classNames, msg ) => (<div className={classnames({'alert': true,},classNames)} role="alert">{msg}</div>);

export class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'components/SearchPage';
  }

  render() {
    let { tag, photos, stats, photoActionsDispatcher, message } = this.props;
    return (
      <div>
        <Main title='Search for images on Flikr'>
          <Form>
            <span aria-hidden="true">What&nbsp;</span>
            <Input
              placeholder="tag"
              fieldId="tag"
              required={true}
              value={tag}
              ariaLabel="Enter what tagged images you want to find on Flicker?"
              onChange={(e)=>{photoActionsDispatcher.requestPhotos( e.target.value )}}
            />
            <span aria-hidden="true">&nbsp;do you want to find on Flickr?</span>
          </Form>
          <br/>
          { message ? alert( 'alert-warning', 'On snap, something bad happened. Maybe if you try again it will resolve it\'s self' ) : null  }
          { ( photos.length === 0 || message ) ? noResults(tag) : results(photos) }
        </Main>
        <br/>
        <Nav stats={stats} onPrevious={()=>photoActionsDispatcher.requestPhotos( tag, stats.page - 1 )} onNext={()=>photoActionsDispatcher.requestPhotos( tag, stats.page + 1 ) } />
      </div>
    );
  }
}

/**
 * Map a specific store's state to the props.
 *
 * @param {*} state - the state of the store/reducer
 * @param ownProps
 */
let mapStateToProps = (state, ownProps) => {
  /**
   * ownProp is the props, this component was created with https://github.com/reactjs/redux/issues/693
   */
  return {
    tag: state.photoReducer.tag,
    photos: state.photoReducer.photos,
    stats: state.photoReducer.stats,
    message: state.photoReducer.message
  };
};

/**
 * Map the Action(s)'s Dispatcher(s) to the props. The way this is written all the action's dispatch functions are mapped to the given name space.
 *
 * @param dispatch
 * @returns {{photoActionsDispatcher: (A|B|M|N)}}
 */
let mapDispatchToProps = (dispatch) => {
  return {
    photoActionsDispatcher: bindActionCreators(PhotoActions, dispatch)
  };
};


export default connect(mapStateToProps, mapDispatchToProps /**, mergeProps **/ )(SearchPage);
