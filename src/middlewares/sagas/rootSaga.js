import { all} from 'redux-saga/effects'

import {NewsFeedsSaga} from '../../components/organisms/NewsFeeds/container/NewsFeeds.saga';

export default function* rootSaga() {
    yield all([
        NewsFeedsSaga(),
    ]);
}