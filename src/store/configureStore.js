//The solution to this problem is to create a new configureStore function which encapsulates our store creation
// logic, which can then be located in its own file to ease extensibility.
import { applyMiddleware, createStore, compose} from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from '../middlewares/logger'
import rootSaga from '../middlewares/sagas';


export const configureStore = () => {

 
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [loggerMiddleware, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


  const store = createStore(
      rootReducer,
      composeEnhancers(middlewareEnhancer)
  );


  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;