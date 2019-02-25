import React, { Component } from 'react';
import ContactsApp from './components/ContactsApp';

class App extends Component {
    state = {
        contacts: []
    }

    componentDidMount(){
        var xhr = new XMLHttpRequest()
        xhr.open("GET", './clients.json', true)
        xhr.onload = function(e){
          if (xhr.readyState === 4){
            if (xhr.status === 200){
              var contacts = xhr.response.contacts.map(user => ({
                name: `${user.general.firstName} ${user.general.lastName}`,
                email: user.contact.email,
                thumbnail: user.general.avatar
              }))
              this.setState({
                contacts: contacts
              })
            } else {
              console.error(xhr.statusText)
            }
          }
        }.bind(this)
        xhr.onerror = function(e){
          console.error(xhr.statusText)
        }
        xhr.send(null)
      }
      
render() {
return(
<div>
<ContactsApp contacts={this.state.contacts}/>
</div>
)

}
    }

export default App










}