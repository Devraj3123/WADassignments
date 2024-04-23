// frontend/src/components/UpdateUser.js

import React, { useState } from 'react';
import axios from 'axios';

const UpdateUser = () => {
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.put(`/update/${email}`, formData);
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;
