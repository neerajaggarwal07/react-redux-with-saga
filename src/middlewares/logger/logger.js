const loggerMiddleware = store => {
    return next => {
        return action =>{
            console.log("[middleWare] Dispatching", action);
           const result  = next(action);
            console.log("[middleWare] next State", store.getState());
           return result;
        }
    }
}

export default loggerMiddleware