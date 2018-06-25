function createStore () {
    let state
    let listeners = []

    const getState = () => state

    const suscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    return {
        getState,
        suscribe
    }

}

const store = createStore()

store.suscribe(() => {
    console.log ('The new state is: ', store.getState())
})

store.suscribe(() => {
    console.log ('The store changed')
})