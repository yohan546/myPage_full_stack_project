export const fetchFriends = (userId) => {
    return $.ajax ({
        method: 'GET',
        url: `/api/users/${userId}/friendships`,
        data: {userId}
    })
}



export const fetchFriend = (userId, friendId) => {
    return $.ajax ({
        method: 'GET',
        url: `/api/users/${user_id}/friendships/${friendId}`,
        data: {userId, friendId}
    })
}