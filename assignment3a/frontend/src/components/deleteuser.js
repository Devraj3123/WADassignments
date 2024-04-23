// frontend/src/components/DeleteUser.js

import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
  const [email, setEmail] = useState('');

  const handleChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.delete(`/delete-user`);
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
        <button type="submit">Delete User</button>
      </form>
    </div>
  );
};

export default DeleteUser;
