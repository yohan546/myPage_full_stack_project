export const fetchUsers = () => {
    return $.ajax ({
        method: 'GET',
        url: '/api/users'
    })
}


export const sign_in = (user) => {
    return $.ajax ({
        method: "POST",
        url: '/api/session',
        data: { user }
    })
}

export const sign_up = (user) => {
    return $.ajax ({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
}

export const sign_out = () => {
    return $.ajax ({
        method: 'DELETE',
        url: '/api/session'
    })
}