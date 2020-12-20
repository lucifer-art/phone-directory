import React from 'react';

const Header = function(props){
    return(
        <div style={{textAlign:'center',padding:20,backgroundColor:'#000',color:'#fff',textTransform:'uppercase'}}>
          Phone directory
          {/* <p>{props.children}</p> */}
        </div>
    )
}

// class Header extends Component {
//   render(){
//     return(
//       <div>
//           Phone directory
//       </div>
//     )
//   }
// }


export default Header;