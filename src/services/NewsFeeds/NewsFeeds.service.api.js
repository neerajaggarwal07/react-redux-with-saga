import ExternalAPIClient from '../handlers';
import endpoints from '../endpoints';


export const get =  (pageNumber) => {
    const reqObj = {
        WebService : {
            URI : endpoints.NewFeeds.URI
        }
    }
    try{
        const response =  ExternalAPIClient(reqObj).get(`search?page=${pageNumber}`);
        return response;
    }
    catch(error ){
        // throw new Error('Unable to establish a login session.'); 
        return {error, isError:true} 
    }
    
}


const NewsFeedsService = {
    get
}  
export default  NewsFeedsService;
