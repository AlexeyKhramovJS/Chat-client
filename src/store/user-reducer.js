import { getFakePhoto } from "../API/userAPI";

const SET_USER_NAME = 'SET_USER_NAME';
const SET_USER_PHOTO = 'SET_USER_PHOTO';

const initialState = {
    user: {
        name: '',
        photo: ''
    }
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_NAME:
            return {...state, user: {...state.user, name: action.name}}
        case SET_USER_PHOTO:
            return {...state, user: {...state.user, photo: action.photo}}
        default:
            return state;
    }
};

export const setUserName = (name) => ({type: SET_USER_NAME, name});
export const setUserPhoto = (photo) => ({type: SET_USER_PHOTO, photo});

export const setPhoto = () => {
    return dispatch => {
        getFakePhoto()
            .then(res => res.json())
            .then(data => dispatch(setUserPhoto(data[0].url)));
    };
};

export default userReducer;