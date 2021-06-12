import { Fragment, useState, useEffect } from 'react';
import classes from './UserFinder.module.css';

import Users from './Users';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Canuel' },
    { id: 'u3', name: 'JulieM' },
];

const UserFinder = () => {
    const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        console.log('useeffect called')
        console.log('current value of search term  :' + searchTerm)
        setFilteredUsers(
            DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
        );
    }, [searchTerm]);

    const searchChangeHandler = (event) => {
        console.log('search handler called')
        setSearchTerm(event.target.value);
    };

    return (
        <Fragment>
            <div className={classes.finder}>
                <input type='search' onChange={searchChangeHandler} />
            </div>
            <Users users={filteredUsers} />
        </Fragment>
    );
};

export default UserFinder;