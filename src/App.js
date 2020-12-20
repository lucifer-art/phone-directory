import React, { Component} from 'react';
import Header from './Header';

class App extends Component{
  render(){
    return(
      <div>
        <Header></Header>
        <button>Add</button>
        <div>
          <span>Name</span><br />
          <span>Phone</span>
        </div>
        {/* <div id="module">
          <p>ReactJS</p>
        </div> */}
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
