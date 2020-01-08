const roomReducer = (state = {
    title: "",
    description: "",
    players: [],
    error_msg: "",
    currentUser: ''
}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                currentUser: action.payload
            }
        case "MOVE":
            return {
                ...state,
                title: action.payload.title,
                description: action.payload.description,
                players: action.payload.players,
                error_msg: action.payload.error_msg,
            };
        default:
            return state
    }
}

export default roomReducer