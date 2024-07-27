export default (state, action) => {
    switch(action.type) {
        case 'SET_ID':
            return action.payload
    }
}