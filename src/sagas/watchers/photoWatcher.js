
import { takeLatest } from 'redux-saga/effects';
import call_fetchPhotos from '../workers/photoWorker';
import ACTIONS from "../../actionCreators/actionTypes/index";

/** *********************************************** **/
/** Designed to regulate the frequency of the calls **/
/** as in de bounce                                 **/
/** *********************************************** **/

export default function* fetchPhotosSaga() {
  // takeLatest does not allow concurrent fetches of PROFILES_REQUEST
  yield takeLatest ( ACTIONS.PHOTOS.REQUEST.INITIATE, call_fetchPhotos );
}
