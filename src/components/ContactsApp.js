import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ContactList from './ContactList';
import './ContactsApp.css';

class ContactsApp extends Component {
    state = {
      filterText: ''
  };

handleUserInput = (searchTerm) => {
    this.setState({filterText: searchTerm})
  }

  render() {
    return(
      <div className="contactApp">
        <SearchBar filterText={this.state.filterText}
                   onUserInput={this.handleUserInput} />
                   <div className="contact">             
        <ContactList contacts={this.props.contacts}
                     filterText={this.state.filterText}/>
        </div>
      </div>
    )
  }
}


export default ContactsApp;