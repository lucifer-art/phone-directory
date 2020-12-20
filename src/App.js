import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    let subscriber = [
      {
        id:1,
        name: 'Shivang',
        phone: '9999999999'
      }, {
        id:2,
        name: 'Simon',
        phone: '8888888888'
      }
    ]
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
          {
            subscriber.map(sub => {
              return (
                <div key={sub.id} className='gridView'>
                  <div>{sub.name}</div>
                  <div>{sub.phone}</div>
                </div>
              )
            })
          }
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
