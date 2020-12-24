import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state = {
            subscriberList: [{
                id: 1,
                name: 'Shivang',
                phone: '9999999999'
            }, {
                id: 2,
                name: 'Shivang Kumar',
                phone: '8888888888'
            }]
        }
    }
    addSubscriberHandler = (newSubscriber) => {
        let subscriberList = this.state.subscriberList;
        if (subscriberList.length > 0) {
            newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscriberList.push(newSubscriber);
        this.setState({ subscriberList: subscriberList });
    }
    render() {
        return (
            <Router>
                <div className='main-container'>
                    <Route exact path='/' render={(props) => <App {...props} subscriberList={this.state.subscriberList} />} />
                    <Route exact path='/add' render={({history},props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
                </div>
            </Router>
        )
    }
}

export default PhoneDirectory;