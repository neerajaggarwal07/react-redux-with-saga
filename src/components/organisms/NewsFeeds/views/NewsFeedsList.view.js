import React from 'react';
import { PropTypes } from 'prop-types';
import TimeAgo from 'react-timeago';

import Col from '../../../atoms/Col/Col';
import Row from '../../../atoms/Row/Row';

import withStyles from '../../../hoc/withStyles';
import styles from '../styles/NewsFeedsList.style';
import BodyCopy from '../../../atoms/BodyCopy/BodyCopy';
import LABELS from '../../../../constants/labels';
import Button from '../../../atoms/Button/Button';
import Anchor from '../../../atoms/Anchor/Anchor';
import VoteCounter from '../../../molecules/VoteCounter/VoteCounter';
import ErrorBoundary from '../../../molecules/ErrorBoundary/ErrorBoundary';

const NewsFeedsList = (props) => {
    const {className,itemsList,loadMoreHandler,hideClickHandler} = props;

    const getTimeAgo = (timestamp) =>{
        return (<TimeAgo date={new Date(timestamp).toISOString()} />)
        
    }

    return (
        <div className={className}>
        <ErrorBoundary>
        <ul>
            {itemsList.map(item => {
              const { objectID, points, title, author, created_at,url}  = item;
                return <li key={item.objectID}>
                    <Row>
                        <Col lg="1" md="2" sm="4" >
                            <BodyCopy component="span" className="title">{points}</BodyCopy>
                            <VoteCounter itemList={itemsList}/>
                        </Col>
                        <Col lg="11" md="10" sm="8" >
                            <BodyCopy component="span" className="title">{title}</BodyCopy>
                            (<Anchor className="url" rel="nofollow noreferrer noopener" target="_blank"  href={url}>findwork.dev</Anchor>)
                            <BodyCopy component="span" className="label">{LABELS.BY}</BodyCopy>
                            <BodyCopy component="span" className="author">{author}</BodyCopy>
                            <BodyCopy component="span" className="timestamp">{getTimeAgo(created_at)}</BodyCopy>
                            [<Button  type="button" ariaLabel={LABELS.HIDE} variation="Link" className="label" onClick={()=> {
                                hideClickHandler(objectID);
                            }}>{LABELS.HIDE}</Button>]
                        </Col>
                    </Row>
                 </li>
            })}
        </ul>
        </ErrorBoundary>
        <Button  type="button" onClick={loadMoreHandler} ariaLabel={LABELS.MORE}>{LABELS.MORE} </Button>
    </div>
    )
}


NewsFeedsList.propTypes = {
    className: PropTypes.string,
    itemsList: PropTypes.shape([]).isRequired,
    loadMoreHandler: PropTypes.func,
    hideClickHandler: PropTypes.func,
  };
  
  NewsFeedsList.defaultProps = {
    className: '',
    loadMoreHandler: () => {},
    hideClickHandler: () => {},

    
  };
export default withStyles(NewsFeedsList, styles);