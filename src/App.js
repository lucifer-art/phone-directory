import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  onDeleteClick = (subscriberId,index) =>{
    this.props.deleteSubscriberHandler(subscriberId,index);
  }
  
  render() {
    // let subscriber = [
    //   {
    //     id:1,
    //     name: 'Shivang',
    //     phone: '9999999999'
    //   }, {
    //     id:2,
    //     name: 'Simon',
    //     phone: '8888888888'
    //   }
    // ]
    return (
      <div>
        {/* <div id="module">
          <p>ReactJS</p>
        </div> */}
        <Header heading='Phone Directory'></Header>
        <div className='component-body-container'>
          <Link to='/add'><button className='cust-btn add' style={{marginBottom:'20px'}}>Add</button></Link>
          <div className='gridView'>
            <div className='nameText'>Name</div>
            <div className='phoneText'>Phone</div>
          </div>
          {
            this.props.subscriberList.map((sub,index) => {
              return (
                <div key={sub.id} className='gridView'>
                  <div>{sub.name}</div>
                  <div>{sub.phone}</div>
                  <div><button className='cust-btn delete' onClick={this.onDeleteClick.bind(this,sub.id,index)}>Delete</button></div>
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
