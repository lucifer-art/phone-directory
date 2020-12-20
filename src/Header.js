import React from 'react';
import './Header.css';

const Header = function(props){
  // var headStyle = {
  //   textAlign:'center',
  //   padding:20,
  //   backgroundColor:'#000',
  //   color:'#fff',
  //   textTransform:'uppercase'
  // }
    return(
        <div className='header'>
          {props.heading}
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