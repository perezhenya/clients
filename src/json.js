import React, { Component } from 'react';
import './App.css';
import jsonData from './clients.json';
import ClientList from './components/ClientList';

class App extends Component {
  state = {
   firstName: undefined,
   secondName: undefined,
   avatar: undefined,
   title: undefined
  }
componentDidMount() {
function loadJSON(jsonfile,callback) {
  var jsonObj = new XMLHttpRequest();
  jsonObj.open('GET', './clients.json', true);
  jsonObj.onreadystatechange = function () {
    if (jsonObj.readyState == 4 && jsonObj.status == "200") {
      callback(jsonObj.responseText);
    }
};
jsonObj.send();  
}

loadJSON(jsonData, function(text) {
      data = JSON.parse(text);
      });

this.setState({
  firstName: data.general.firstName,
  secondName: data.general.secondName,
  avatar: data.general.avatar,
 title: data.job.title
})
}



render() {
    return (
      <div>
       < ClientList 
         firstName= {this.state.firstName}
         secondName={this.state.secondName}
         avatar={this.state.avatar}
        title={this.state.title}
       />
      </div>
    );
    }
  }

export default App;