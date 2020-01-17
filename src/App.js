import React from 'react';
import logo from './logo.svg';
import './App.css';
var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
 
// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);
 
// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/users').reply(200, {
  users: [
    { id: 1, name: 'John Smith' ,valor:22223}
  ]
});
 
axios.get('/users')
  .then(function(response) {
    console.log(response.data);
  });
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
