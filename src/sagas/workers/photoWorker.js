
import * as api from '../../services/api';
import { call, put } from 'redux-saga/effects';
import { API_KEY } from '../../constants';
import { saveTag, loadPhotos, loadPhotosStats, requestPhotosSuccess, requestPhotosFail  } from '../../actionCreators/photoActions';

/** **************** **/
/** Actual API calls **/
/** **************** **/

export default function* call_fetchPhotos ( action ) {
  try {

    yield put( saveTag( action.value.tag ) );
    const results = yield call( api.fetchPhotosByTag, API_KEY, action.value.tag, action.value.page );
    let { page, pages, perpage, total, photo } = results.photos;
    let {stats, message} = results;
    if ( stats === 'fail' ) {
      let e = new Error(message);
      e.status = 500;
      throw e;
    }
    yield put( loadPhotos( photo ) );
    yield put( loadPhotosStats( { page, pages, perpage, total } ) );
    yield put( requestPhotosSuccess( stats ) )
  } catch (e) {
    if ( e.status === 500 ) {
      yield put( requestPhotosFail( 'System failure' ) );
    } else {
      yield put( requestPhotosFail( 'System is off-line' ) );
    }
  } finally {

  }
}
