function createStore(reducer) {
    let state;
    let listeners = []

    let getState = () => state

    let subscribe = function (listener) {
        listeners.push(listener)
    }

    let dispatch = function (action) {
        state = reducer(state, action)
        listeners.forEach(l => l())
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

function combineReducers(reducers) {
    return (state = {}, action = {}) => {
        let newState = {}
        for (var attr in reducers) {
            newState[attr] = reducers[attr](state[attr], action)
        }

        return newState
    }
}

export { createStore, combineReducers }