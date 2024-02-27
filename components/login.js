import React, { useState } from 'react';
import { LoginPage, Form, LoginForm, RegisterForm, Input, Button, Message, Link } from './styles/login.styled';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
// ... styled components definitions

function Login() {

  const [isRegisterFormVisible, setIsRegisterFormVisible] = useState(false);
  const toggleForm = () => {
    setIsRegisterFormVisible(!isRegisterFormVisible);
  };

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');



const register = async () => {
    // ... register logic
    try {
    const user = await createUserWithEmailAndPassword(
        auth,
         registerEmail,
          registerPassword);
          
    } catch (error) {
        console.log(error.message);

    }
}
const login = async () => {
    // ... login logic
}
const logout = async () => {
    // ... logout logic
}

  return (
    <LoginPage>
      <Form>
        {isRegisterFormVisible ? (
          <Form>
            <Input placeholder='Email' onChange={(event) => setRegisterEmail(event.target.value)}/>
            <Input placeholder='Password' onChange={(event) => setRegisterPassword(event.target.value)}/>
            <Button onClick={register}>Create</Button>
            {/* ... */}
          </Form>
        ) : (
          <Form>
            <Input placeholder='Email' onChange={(event) => setLoginEmail(event.target.value)}/>
            <Input placeholder='Password' onChange={(event) => setLoginPassword(event.target.value)} />
            {/* Login form fields */}
            <Button onClick={''}>Login</Button>
            {/* ... */}
          </Form>
        )}
        <Message>

          {isRegisterFormVisible ? (
            <Link onClick={toggleForm}>Sign In</Link>
          ) : (
            <Link onClick={toggleForm}>Create an account</Link>
          )}
        </Message>
      </Form>
    </LoginPage>
  );
}

export default Login;