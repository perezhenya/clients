import React, {Component} from 'react';
import ContactsAppOne from './components/ContactsApp';


export default class AppOne extends Component {
    state = {
        clients: []
    }
};


componentDidMount() {
    fetch('');
    .then(response => response.json())
    .then(parsedJson => 
        parsedJson.results.map(user => ({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email
        thumbnail: user.details.thumbnail

        })))
        .then(clients => 
            this.setState({clients}))
}


render() {
    return(
<div>
    <ContactsAppOne clients={this.state.clients}/>
</div>
)
} 


















}