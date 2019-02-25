import React from 'react';

const ContactList = ({ contacts, filterText }) => {
  const filteredContacts = contacts.filter(contact =>
     contact.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);

  return(
    <ul>
      {filteredContacts.map(contact =>
       <li key={contact.email}>
          <img alt="text" src={contact.thumbnail} role="presentation" />
          <div className="contactData">
            <strong>{contact.name}</strong><br/><small>{contact.email}</small>
          </div>
        </li>
      )}
    </ul>
  )
}


export default ContactList;