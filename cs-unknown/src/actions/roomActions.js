const title = (data) => {
    return {
        type: "TITLE",
        payload: data
    }
}

const description = (data) => {
    return {
        type: "DESCRIPTION",
        payload: data
    }
}

const players = (data) => {
    return {
        type: "PLAYERS",
        payload: data
    }
}

const error_msg = (data) => {
    return {
        type: "ERROR_MSG",
        payload: data
    }
}

export {
    title,
    description,
    players,
    error_msg
}