export const setFavorite = payLoad => ({
    type: 'SET_FAVORITE',
    payLoad,

});

export const deleteFavorite = payLoad => ({
    type: 'DELETE_FAVORITE',
    payLoad,
});

export const loginRequest = payLoad => ({
    type: 'LOGIN_REQUEST',
    payLoad,
});

export const logoutRequest = payLoad => ({
    type: 'LOGOUT_REQUEST',
    payLoad,
});

export const registerRequest = payLoad => ({
    type: 'REGISTER_REQUEST',
    payLoad,
});

export const getVideoSource = payLoad => ({
    type: 'GET_VIDEO_SOURCE',
    payLoad,
});