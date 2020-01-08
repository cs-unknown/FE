const room = (state = {
    title: "",
    description: "",
    players: [],
    error_msg: ""
}, action) => {
    switch(action.type) {
        case "TITLE":
            return state.title = action.payload;
        case "DESCRIPTION":
            return state.description = action.payload;
        case "PLAYERS":
            return state.players = action.payload;
        case "ERROR_MSG":
            return state.error_msg = action.payload;
    }
}

export default roomReducer