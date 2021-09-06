const ADD_USERS = 'ADD_USERS';
const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';

const initialState = {
    userList: [],
    isActive: false
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USERS:
            return {...state, userList: [...action.users]};
        case TOGGLE_ACTIVE:
            return {...state, isActive: !state.isActive}
        default:
            return state;
    }
};

export const addUsers = (users) => ({type: ADD_USERS, users});
export const toggleActive = () => ({type: TOGGLE_ACTIVE});

export default usersReducer;