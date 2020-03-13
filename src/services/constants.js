export const API_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
  };
  export const errorMessages = {
    bootstrapError: 'ERROR IN RESPONSE OF BOOTSTRAP QUERY',
    bootstrapSagaError: 'ERROR DUE TO JS PARSING FAIL IN BOOTSTRAP SAGA',
    headerDataError: 'INVALID or NULL HEADER DATA',
    errorParsingError:
      'ERROR IN JS PARSING ERROR RESPONSE',
  };
  export const API_REQUEST_TIMEOUT = 5000
  export default {
    API_METHODS,
    errorMessages,
    API_REQUEST_TIMEOUT
};
  