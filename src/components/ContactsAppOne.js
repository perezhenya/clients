import React, { Component } from 'react';
import SearchBarOne from '';
import ContactListOne from './';


export default class ContactsApp extends Component {
    state = {
        filterText: ''
    };


handleUserInput = (searchItem) => {
    this.setState({filterText: searchItem})
}

render() {
    return(
<div>
    <SearchBarOne  filterText = {this.state.filterText}
                   onInput = {this.handleUserInput}/>
<div>
<ContactListOne     contacts = {this.props.contacts}
                    filterText = {this.state.filterText}/>
</div>
</div>
    );
} 
}


