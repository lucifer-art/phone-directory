import React,{Component} from 'react';
import Header from './Header';
import './AddSubscriber.css';
import { Link } from 'react-router-dom';

class AddSubscriber extends Component {
    constructor(){
        super();
        this.state = {
            id:0,
            name:'',
            phone:''
        }
    }
    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    onFormSubmitted = (e) =>{
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({
            id:0,
            name:'',
            phone:'',
        })
        this.props.history.push('/');
    }
    render(){
        return(
            <div>
                <Header heading='Add Subscriber'></Header>
                <div className='component-body-container'>
                    <Link to='/'><button className='cust-btn'>BACK</button></Link>
                    <form className='subscriber-form' onSubmit={this.onFormSubmitted.bind(this)}>
                        <label htmlFor='name' className='label-control'>Name</label><br></br>
                        <input id='name' type='text' className='input-control' name='name' placeholder='Provide name' onChange={this.inputChangedHandler}/><br></br><br></br>
                        <label htmlFor='phone' className='label-control'>Phone</label><br></br>
                        <input id='phone' className='input-control' name='phone' placeholder='Provide phone' onChange={this.inputChangedHandler}/><br></br><br></br>
                        <div className='subscriber-info-container'>
                            <div className='subscriber-to-add-heading'>Subscriber to be added:</div>
                            <span className='subscriber-info'>Name: {this.state.name}</span><br></br>
                            <span className='subscriber-info'>Phone: {this.state.phone}</span>
                        </div>
                        <button type='submit' className='cust-btn submitButton'>Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSubscriber;