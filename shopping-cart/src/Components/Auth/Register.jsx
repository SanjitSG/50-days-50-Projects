import { Alert } from "@mui/material";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase.config';

const auth = getAuth(app);

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      setError(null);
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      <Alert>User Created Successfully !!</Alert>
    } catch (error) {
      setError(error.message);
      console.log('Registration failed', error);
      <Alert>{error}</Alert>
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error-message">{error}</p>}
      <label>
        username:
        <input type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Register</button>
    </form>
  )
};

export default Register;
