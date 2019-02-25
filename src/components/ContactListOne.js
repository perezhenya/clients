import React from 'react';

export default const ContactListOne = {(contacts, filterText)} => {
    const filteredContacts  = contacts.filter(contact => {
        contact.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);
    
return(
    <ul>
{filteredContacts.map(contact => {
    <li key={contact.email}>
     <img alt="pic" src={contact.thumbnail}/>
     <strong>{contact.name}</strong><br/><small>{contact.email}</small>
</li>

)}
</ul>
)

}




















