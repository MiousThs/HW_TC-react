import React from 'react';
import { addContact, deleteContact } from '../actions/contact.action';

const EditForm = ({ target, store, showEditBar }) => {
    let targetContact = store.getState().contacts.filter( contact => {
        return (contact.email === target)
    })[0];
    let _email, _first, _imgSrc, _last, _phone, _title;

    const submit = e => {
        e.preventDefault();
        let _name = {
            title: _title.value,
            first: _first.value,
            last: _last.value,
        }
        
        store.dispatch(deleteContact(target));
        store.dispatch(addContact((_imgSrc.value || "data:image/jpeg;base64,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"), _name, _email.value, _phone.value));
        _title.value = '';
        _first.value = '';
        _last.value = '';
        _email.value = '';
        _phone.value = '';
        _imgSrc.value = '';
        showEditBar();
    }

    const getBack = (e) => {
        e.preventDefault();
        _title.value = '';
        _first.value = '';
        _last.value = '';
        _email.value = '';
        _phone.value = '';
        _imgSrc.value = '';
        showEditBar();
    }

    return (
        <form className="edit-contact" onSubmit={ submit }>
            <div className="inp">
                <h2>Tittle: </h2>
                <input type="text" defaultValue={targetContact.name.title} 
                    ref={ input => _title = input } required/>
            </div>
            <div className="inp">
                <h2>Name: </h2>
                <input type="text" defaultValue={targetContact.name.first} 
                    ref={ input => _first = input } required/>
            </div>
            <div className="inp">
                <h2>Last name: </h2>
                <input type="text" defaultValue={targetContact.name.last} 
                    ref={ input => _last = input } required/>
            </div>
            <div className="inp">
                <h2>Email: </h2>
                <input type="text" defaultValue={targetContact.email} 
                    ref={ input => _email = input } required/>
            </div>
            <div className="inp">
                <h2>Phone: </h2>
                <input type="text" defaultValue={targetContact.phone} 
                    ref={ input => _phone = input } required/>
            </div>
            <div className="inp">
                <h2>Link on your avatar: </h2>
                <input type="text" defaultValue={targetContact.imgSrc} 
                    ref={ input => _imgSrc = input }/>
            </div>
            <div className="buttons-1">
                <button>Save</button>
                <button onClick={ getBack }>Discard</button>
            </div>
        </form>
    )
}

export default EditForm;