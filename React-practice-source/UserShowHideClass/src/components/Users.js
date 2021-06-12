import {Component, useState } from 'react';
import User from './User';

import classes from './Users.module.css';



// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];

class Users extends Component{
constructor(){
    super();
    this.state = {
        showUsers:true,
        More:'Test'
    };
  };
  
  toggleUsersHandler(){
    console.log(this.state.showUsers);
      this.setState((curState) => {
       return{showUsers: !curState.showUsers};

      //  return console.log(this.state.showUsers);
      });
  }
  render(){
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
  

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );

  
  };
};

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

  

// };

export default Users;