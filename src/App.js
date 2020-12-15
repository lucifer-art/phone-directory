import React, { Component} from 'react';

class App extends Component{
  render(){
    return(
      <div>
        <div>
        Phone directory
        </div>
        <button>Add</button>
        <div>
          <span>Name</span><br />
          <span>Phone</span>
          <div>
            <label htmlFor="textField">Name </label>
          <input id="textField" type="text" defaultValue="Shivang"/>
          </div>
          
        </div>
      </div>
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
