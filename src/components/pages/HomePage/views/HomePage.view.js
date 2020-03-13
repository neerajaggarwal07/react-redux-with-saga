import React from 'react';
import withStyles from '../../../hoc/withStyles';
import HomePageStyles from '../../../../styles/HomePage.style';
import NewsFeedsListContainer from '../../../organisms/NewsFeeds/container/NewsFeeds.container';

const HomePageView = ({itemsList,loadMoreHandler, hideClickHandler}) => {
    return (
        <NewsFeedsListContainer />
     )
}

export default withStyles(HomePageView,HomePageStyles);