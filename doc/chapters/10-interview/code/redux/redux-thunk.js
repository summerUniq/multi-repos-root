function patchThunk(store) {
    const next = store.dispatch

    function disPatchAndThunk(action) {
        if (typeof action === 'function') {
            action(store.dispatch, store.getState)
        } else {
            next(action)
        }

    }

    store.dispatch = disPatchAndThunk
}