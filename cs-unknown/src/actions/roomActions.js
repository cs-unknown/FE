export const title = (data) => {
    return {
        type: "TITLE",
        payload: data
    }
}

export const description = (data) => {
    return {
        type: "DESCRIPTION",
        payload: data
    }
}

export const players = (data) => {
    return {
        type: "PLAYERS",
        payload: data
    }
}

export const error_msg = (data) => {
    return {
        type: "ERROR_MSG",
        payload: data
    }
}

