import React,{useState, useEffect}  from 'react';
import withStyles from '../../hoc/withStyles';
import VoteCounterStyle from './VoteCounter.style';
import BodyCopy from '../../atoms/BodyCopy/BodyCopy';
import Button from '../../atoms/Button/Button';


const VoteCounter = (props) => {
    const {className,itemList} = props;
    const [voteCounter,setVoteCounter] = useState(0);

    useEffect(()=> {
        setVoteCounter(0) 
    },[itemList]);

    return(
        <div className={className}>
        <BodyCopy component="span" className="title">{voteCounter}</BodyCopy>
        <Button  type="button" ariaLabel="arrow" className='icon-up' onClick={() => setVoteCounter(voteCounter+1)}></Button>
        </div>
    )
}

export default withStyles(VoteCounter,VoteCounterStyle);
