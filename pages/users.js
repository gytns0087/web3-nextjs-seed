import React, { useEffect, useState, useRef } from 'react';
import { Button, Form, Input } from 'antd';
import NewUserInput from '../components/NewUserInput';

const initUsers = [
	{
		id: 1,
		name: 'ken',
		email: 'ken@flui.ai'
	},
	{
		id: 2,
		name: 'ken2',
		email: 'ken2@flui.ai'
	}
];

const Users = ({ users }) => {
	return (
		<div>
			<h1>User List</h1>
			{users && users.map(user => <User key={user.id} user={user} />)}
		</div>
	);
};

const User = ({ user }) => {
	return <div>Name: {user.name}</div>;
};

<<<<<<< HEAD:pages/code.js
=======
// setUsers([...users, values]);

>>>>>>> upstream/master:pages/users.js
const UserListContainer = props => {
	const [users, setUsers] = useState([]);

	function onInputChangeHandle(values) {
		console.log('onInputChangeHandle', values);

		// const newUser = [];
		// for( const user in users) {
		// 	newUser.push(user);
		// }
		// newUser.push(values);

		setUsers([...users, { ...values, id: new Date().getTime() }]);
	}

	// useEffect(() => {});
	//
	// const ref = useRef();

	return (
		<>
			<NewUserInput onSubmit={onInputChangeHandle} />
			<Users users={users} />
		</>
	);
};

export default UserListContainer;
