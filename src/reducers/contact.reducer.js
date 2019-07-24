import { ADD_CONTACT, DELETE_CONTACT } from '../actions/contact.action';

// const initialState = fetch('https://randomuser.me/api?results=10&inc=name,phone,email')
//     .then(response => response.json())
//     .then(json => json.results);

export const contact = (state={}, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                imgSrc: action.imgSrc,
                name: action.name,
                email: action.email,
                phone: action.phone
            }
        default:
            return state;
    }
}

export const contacts = (state=[], action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return [
                ...state,
                contact({}, action)
            ];
        case DELETE_CONTACT:
            return state.filter(
                c => c.email !== action.email
            );
        default:
            return state;
    }
}