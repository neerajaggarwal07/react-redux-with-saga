import NewsFeedsReducer from '../components/organisms/NewsFeeds/container/NewsFeeds.reducer';
//import NewsFeedsReducer from '../components/organisms/NewsFeeds/container/NewsFeeds.reducer';

import { combineReducers } from 'redux';

const rootReducer =  combineReducers({
    NewsFeeds : NewsFeedsReducer
});


export default rootReducer;