import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <div id="module">
          <p>ReactJS</p>
        </div> */}
        <Header>Hello World!</Header>
        <div className='component-body-container'>
          <button className='cust-btn add'>Add</button>
          <div className='gridView'>
            <div className='nameText'>Name</div>
            <div className='phoneText'>Phone</div>
          </div>
        </div>


      </div>

      // React.createElement("div",{id:"module"},
      // React.createElement('p',null,'ReactJS')
    );
  }
}
// function App() {
//   return (
//     <div>
//       Phone directory
//     </div>
//   );
// }

export default App;
