/**
 * Action Types are Constants that are used to identify action on data in the store or side effects like loading data with sagas.
 *
 * If you see videos or projects on Github normally you will see a set of flat constants. I saw someone doing this, and I like it because it shows relationships.
 *
 * @type {{PHOTOS: {REQUEST: {INITIATE: string, SAVETAG: string, LOAD: string, LOADSTATS: string, SUCCESS: string, FAIL: string}}}}
 */
const ACTIONS = {
  PHOTOS: {
    REQUEST: {
      INITIATE: 'photos.request.initiate',
      SAVETAG: 'photos.request.savetag',
      LOAD: 'photos.request.load',
      LOADSTATS:'photos.request.loadstats',
      SUCCESS: 'photos.request.success',
      FAIL: 'photos.request.fail'
    }
  }
};

export {ACTIONS as default};

