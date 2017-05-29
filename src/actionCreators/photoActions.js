/**
 * Actions are the mechanism you use to communicate with the Dispatcher on the Store.
 *
 * It wraps the data with a type and in this case a value, replicating what we would see in a strongly typed language like Java as an interface.
 *
 * Lessons Learned:
 *   1.) Never make your action form the data for a reducer in an expected shape. Because this creates tight coupling ( an Anti-Pattern )
 *   2.) Consistence wins, use one convention and stick with it. For example, the action specification does not require a "value:*" but rather "*". This creates deviations and can expand complexity for maintenance and refactoring.
 */
import ACTIONS from "./actionTypes/index";

/**
 * Request from the server tagged images
 * @function
 * @param {string} tag - the tag.
 * @param {number} [page=1] - the page to fetch.
 * @param pageSize [pageSize=30] - the page size to fetch.
 */
export const requestPhotos = ( tag, page = 1, pageSize = 30 ) => ({
  type: ACTIONS.PHOTOS.REQUEST.INITIATE,
  value: { tag, page, pageSize }
});

/**
 * save the tag
 * @function
 * @param {string} tag - the tag.
 */
export const saveTag = tag => ({
  type: ACTIONS.PHOTOS.REQUEST.SAVETAG,
  value: tag
});

/**
 * Load the photos into the store
 * @function
 * @param {*} photos - the photos.
 */
export const loadPhotos = photos => ({
  type: ACTIONS.PHOTOS.REQUEST.LOAD,
  value: photos
});

/**
 * Load the stats into the store
 * @function
 * @param {*} stats - the stats of the results.
 */
export const loadPhotosStats = stats => ({
  type: ACTIONS.PHOTOS.REQUEST.LOADSTATS,
  value: stats
});

/**
 * The request was success. This is used by a saga, and could be used by a loading mask.
 * @function
 * @param {string} message - a message, usually blank.
 */
export const requestPhotosSuccess = message => ({
  type: ACTIONS.PHOTOS.REQUEST.SUCCESS,
  value: message
});

/**
 * The request failed. This is used by a saga, and could be used by a loading mask or error message.
 * @function
 * @param {string} message - a message,
 */
export const requestPhotosFail = message => ({
  type: ACTIONS.PHOTOS.REQUEST.FAIL,
  value: message
});

