import {Component} from 'react';

import classes from './Users.module.css';
import User from './User';

class Users extends Component {
    // define state
    constructor() {
        super();
        this.state = {
            showUsers: true
        }; //always is an object
    }

    componentDidUpdate(){
        if(this.props.users.length === 0){
            throw new Error('Something Wrong');
        }
    }
    
    toggleUserHandler() {
        // // updating values
        // this.setState({
        //     showUsers:false
        // }); // react merge with the first state object
        
        // Using previous value
        this.setState((curState) => {
            return {
                showUsers: !curState.showUsers
            }
        })
    }

    render() {
        const usersList = (
            <ul>
                {this.props.users.map((user) => (
                    <User key={user.id} name={user.name} />
                ))}
            </ul>
        )

        return (
            <div className={classes.users}>
                <button onClick={this.toggleUserHandler.bind(this)}>
                    {this.state.showUsers ? 'Hide' : 'Show'} Users
                </button>
                {this.state.showUsers && usersList}
            </div>
        )
    }
}

export default Users;