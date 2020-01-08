const title = () => {
    return {
        type: "TITLE"
    }
}

const description = () => {
    return {
        type: "DESCRIPTION"
    }
}

const players = () => {
    return {
        type: "PLAYERS"
    }
}

const error_msg = () => {
    return {
        type: "ERROR_MSG"
    }
}

export default {
    title,
    description,
    players,
    error_msg
}