import { $CombinedState } from "redux"

export const sign_in = (user) => {
    return $.ajax ({
        method: "GET",
        url: 'api/users/newsfeed',
        data: {user}
    })
}

export const sign_up = (user) => {
    return $.ajax ({
        method: 'POST',
        url: 'api/session',
        data: {user}
    })
}

export const sign_out = () => {
    return $.ajax ({
        method: 'GET',
        url: `api/session`
    })
}