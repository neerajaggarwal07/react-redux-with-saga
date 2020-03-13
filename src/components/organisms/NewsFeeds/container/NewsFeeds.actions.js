import constants from './NewsFeeds.constants';
//import NewsFeedsService from "../../../../services/NewsFeeds/NewsFeeds.service.api";


// Action Creators

/**
 * @function pageCounter
 * @description This synchronous action creator will return action object consisting of page number as action type
 */
export const pageCounter = () => {
    return {
        type : constants.PAGE_NUMBER
    }
}

/**
 * @function showLoader
 * @description This synchronous action creator will return action object consisting of show loader as action type
 */
export const showLoader = () => {
    return {
      type: constants.SHOW_LOADER,
    };
  };
  
/**
 * @function hideLoader
 * @description This synchronous action creator will return action object consisting of hide loader as action type
 */
  export const hideLoader = () => {
    return {
      type: constants.HIDE_LOADER,
    };
  };

/**
 * @function showError
 * @description This synchronous action creator will return action object consisting of show error as action type and error flag 
 */
  export const showError = (bIsError) => {
    return {
      type: constants.SHOW_ERROR,
      bIsError: false
    };
  };

/**
 * @function hideNews
 * @description This synchronous action creator will return action object consisting of hide news feed as action type and news id 
 */
export const hideNews = (id) => {
  return {
    type: constants.HIDE_NEWS,
    id:id
  };
};
//Synchronous Action
/**
 * @function storeNewsFeed
 * @description This synchronous action creator will return action object consisting of get news feed as action type and API response 
 */
export const getNewsFeeds = (pageNumber) => {
  console.log('getNewsFeeds....');
    return {
        type:constants.GET_NEWS_FEEDS,
        pageNumber:pageNumber

    }
};
/**
 * @function storeNewsFeed
 * @description This synchronous action creator will return action object consisting of get news feed as action type and API response 
 */
export const setNewsFeeds = (payload) => {
  return {
      type:constants.SET_NEWS_FEEDS,
      results:payload

  }
};



