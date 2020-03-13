import { call, put, takeLatest } from 'redux-saga/effects';
import {pageCounter,showLoader,hideLoader,setNewsFeeds,showError} from './NewsFeeds.actions'
import NewsFeedsService from "../../../../services/NewsFeeds/NewsFeeds.service.api";
import constants from './NewsFeeds.constants';


//Generator Function
// Worker Saga

/**
 * @function handleLoadNewsFeeds This is worker saga that handles loading the news feeds
 * @param {pageNumber} navData The list of links in the left nav as config object
 */
export function* handleLoadNewsFeeds( {pageNumber}) {
  try {
    // Effect Creator 
    // PUT - dispatch an action
    //put returns an object with instructions for the middleware to dispatch the action.
    //Those returned objects are called Effects
    yield put(showLoader());
    yield put(pageCounter());

    // The call is one of the Redux-Saga helper functions. It essentially behaves like calling a function using async-await.
    // runs a function, if it returns a promise, pauses the saga until the promise is resolved
    // put returns an object with instructions for the middleware to dispatch the action.
    // Those returned objects are called Effects
    let resp = yield call(NewsFeedsService.get,pageNumber);// resp is an Effect
     yield put(setNewsFeeds(resp.data.hits))
 
   } catch (e) {
    yield put(showError());
  }finally {
    yield put(hideLoader());
  }
}

/**
 * @function handleLoadNewsFeeds This is watcher saga that handles loading the news feeds
 */
export function* NewsFeedsSaga() {
  // takeLatest - is a helper function provided by redux-saga that will trigger a new workerSaga when it sees an GET_NEWS_FEEDS,
  yield takeLatest(constants.GET_NEWS_FEEDS, handleLoadNewsFeeds);
}

export default NewsFeedsSaga

