function patchLogger(store) {
    const next = store.dispatch

    function dispatchAndLogger(action) {
        console.log("dispatching:", addAction(10));
        next(action)
        console.log("新的state:", store.getState());
    }

    store.dispatch = dispatchAndLogger
}