import axios from "axios";

import {API_REQUEST_TIMEOUT} from './constants';

 const ExternalAPIClient = (reqObj) => {
    const {WebService} = reqObj;
    return axios.create({
        baseURL: WebService.URI,
        timeout: API_REQUEST_TIMEOUT,
      });
}

export default ExternalAPIClient;