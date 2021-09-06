const ADD_MESSAGE = 'ADD_MESSAGE';
const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

const initialState = {
    messages: []
};

const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            return {...state, messages: [...state.messages, action.message]}
        case REMOVE_MESSAGE:
            const stateCopy = {...state, messages: [...state.messages]};            
            const index = stateCopy.messages.findIndex(item => item.id === action.id); 

            stateCopy.messages[index].messageText = 'Сообщение удалено';
            stateCopy.messages[index].messageImage = '';            
            
            return stateCopy;
        default:
            return state;
    }
};

export const addMessage = (message) => ({type: ADD_MESSAGE, message});
export const removeMessage = (id) => ({type: REMOVE_MESSAGE, id});

export default messagesReducer;