
import {merge} from "lodash";
import ACTIONS from "../actionCreators/actionTypes/index";

let initialState = { photos: [], message: '', tag: '', stats: null };

/**
 * When you use immutable, it locks down the state, by wrapping the object
 * with mutable functions that track the state change, returning the new
 * state of the object.
 *    Consequently Object.assign will destroy the immutable object.
 *    Therefore, .......
 *
 * Lessons Learned:
 *   1.) No need for immutable.js. Good programming and testing can replace this functionality.
 *   2.) Normalizr looks really good, it is a water shed of good ideas. However, wrapping and unwrapping the data or even re-working the services and apis requires work.
 *   3.) Keep Payload manipulation here... close to the code.
 */

export default function photoReducer(state = initialState, action) {
  let value = action.value;

  switch (action.type) {

    case ACTIONS.PHOTOS.REQUEST.SAVETAG:
      return merge({}, state, {tag: value});

    case ACTIONS.PHOTOS.REQUEST.LOADSTATS:
      return Object.assign({}, state, {stats: value});

    case ACTIONS.PHOTOS.REQUEST.SUCCESS:
    case ACTIONS.PHOTOS.REQUEST.FAIL:
      return merge({}, state, {message: value});

    case ACTIONS.PHOTOS.REQUEST.LOAD:
      return Object.assign({}, state, {photos: value});

    default:
      return state
  }
}
