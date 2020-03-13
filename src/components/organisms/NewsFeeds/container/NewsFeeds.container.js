import React, { PureComponent } from "react";
import NewsListView from "../views/NewsFeedsList.view";
import {connect} from 'react-redux';
import {getNewsFeeds,hideNews} from './NewsFeeds.actions'


 class NewsFeedsContainer extends PureComponent {
  
/**
 * @function componentDidMount
 * @description This function will call a method that will dispatch an action to fetch news feeds data
 */
  componentDidMount() {
    this.props.onClickLoadMore(this.props.pgNum);
  }
 
  render() {
    if(this.props.isLoading) {
        return <p>Loading...</p>
    }
    if(this.props.isError) {
        return <p>Something Went Error...</p>
    }
    return (
      <NewsListView
        itemsList={this.props.newsFeedsList}
        loadMoreHandler={() => this.props.onClickLoadMore(this.props.pgNum)}
        hideClickHandler={this.props.onHideClickHandler}
      />
    );
  }
}

//store a function and return
const mapStateToProps = state => {

  // map of prop names and slice of state stored in redux
  return {
    pgNum : state.NewsFeeds.pageNumber,
    newsFeedsList : state.NewsFeeds.newsFeedsList,
    isError : state.NewsFeeds.error,
    isLoading: state.NewsFeeds.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // holds the reference of annonymouse function 
    onClickLoadMore : (pgNum) => dispatch(getNewsFeeds(pgNum)),
    onHideClickHandler : (id) => dispatch(hideNews(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedsContainer);
