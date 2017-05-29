
import 'babel-polyfill'
import { fork } from 'redux-saga/effects';
import fetchPhotosSaga from './watchers/photoWatcher';

/** ******************************* **/
/** Root Exported Saga, that is run **/
/** ******************************* **/

export default function* rootSaga() {
    yield [
        fork(fetchPhotosSaga)
    ]
}
