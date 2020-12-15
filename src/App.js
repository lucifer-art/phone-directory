import React, { Component} from 'react';

class App extends Component{
  render(){

    return(
      // <div>
      //   {/* <div>
      //     Phone directory
      //   </div>
      //   <button>Add</button>
      //   <div>
      //     <span>Name</span><br />
      //     <span>Phone</span>
      //     <div>
      //       <label htmlFor="textField">Name </label>
      //       <input id="textField" type="text" defaultValue={x + y} />
      //     </div>

      //   </div> */}
      //   <div id="module">
      //     <p>ReactJS</p>
      //   </div>
      // </div>
      React.createElement("div",{id:"module"},
      React.createElement('p',null,'ReactJS')
      )
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
