import React from 'react';
import Contact from './contact.contact';

const ListOfContacts = ({ contacts, deleteContact, editContact }) => {
    return (
        <div className="wrapper">
            {(contacts.length === 0) ?
                <p>No Contacts Yet</p> :
                contacts.map(contact => 
                    <Contact key={contact.email} 
                    {...contact} 
                    onDelete={ () => { deleteContact(contact.email) } } 
                    onEdit={ () => { editContact(contact.email) } } />)}
        </div>
    )
}

export default ListOfContacts;