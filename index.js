// Library Code
function createStore (reducer) {
    let state
    let listeners = []

    const getState = () => state

    const suscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }

    return {
        getState,
        suscribe,
        dispatch
    }

}

//App Code
function todos (state = [], action) {
    if (action === 'ADD_TODO') {
        return state.concat([action.todo])
    }

    return state
}