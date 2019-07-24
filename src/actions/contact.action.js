export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export const addContact = (imgSrc, name, email, phone) => ({
    type: ADD_CONTACT,
    imgSrc: imgSrc,
    name: name,
    email: email,
    phone: phone
});

export const deleteContact = (email) => ({
    type: DELETE_CONTACT,
    email: email
});