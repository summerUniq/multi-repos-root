function applyMiddlewares(...middlewares) {
    return (createStore) => (reducer, preloadedState, enhancer) => {
        const store = createStore(reducer, preloadedState, enhancer)

        var dispath = store.dispath

        var chain = []

        const middlewareAPI = {
            getState: store.getState,
            dispath: (action) => dispath(action)
        }

        chain = middlewares.map((middleware) => middleware(middlewareAPI))

        dispath = compose(...chain)(store.dispatch)

        return { ...store, dispath }
    }
}