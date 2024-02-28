import React, { useState } from "react";
import {
  LoginPage,
  Form,
  LoginForm,
  RegisterForm,
  Input,
  Button,
  Message,
  Link,
} from "./styles/login.styled";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";
import CoolButton from "./coolButton";
// ... styled components definitions

function Login() {
  const [isRegisterFormVisible, setIsRegisterFormVisible] = useState(false);

  const toggleRegisterForm = () => {
    setIsRegisterFormVisible(!isRegisterFormVisible);
  };

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormTrue = () => {
    setIsFormVisible(true);
  };
  const toggleFormFalse = () => {
    setIsFormVisible(false);
  };

  const [isNoUser, setIsNoUser] = useState(true);

  const toggleNoUser = () => {
    setIsNoUser(!isNoUser);
  };

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const register = async () => {
    // ... register logic
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      toggleFormFalse();
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {
    // ... login logic
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      toggleNoUser();
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    // ... logout logic
    await signOut(auth);
    toggleNoUser();
  };

  return (
    <>
      {isNoUser ? (
        <>
          {isFormVisible ? (
            <LoginPage>
              <Form>
                {isRegisterFormVisible ? (
                  <Form>
                    <Input
                      placeholder="Email"
                      onChange={(event) => setRegisterEmail(event.target.value)}
                    />
                    <Input
                      placeholder="Password"
                      onChange={(event) =>
                        setRegisterPassword(event.target.value)
                      }
                    />
                    <Button onClick={register}>Create</Button>
                    {/* ... */}
                  </Form>
                ) : (
                  <Form>
                    <Input
                      placeholder="Email"
                      onChange={(event) => setLoginEmail(event.target.value)}
                    />
                    <Input
                      placeholder="Password"
                      onChange={(event) => setLoginPassword(event.target.value)}
                    />
                    {/* Login form fields */}
                    <Button onClick={login}>Login</Button>
                    {/* ... */}
                  </Form>
                )}
                <Message>
                  {isRegisterFormVisible ? (
                    <Link onClick={toggleRegisterForm}>Sign In</Link>
                  ) : (
                    <Link onClick={toggleRegisterForm}>Create an account</Link>
                  )}
                </Message>
              </Form>
            </LoginPage>
          ) : (
            <Button onClick={toggleFormTrue}>Login</Button>
          )}
        </>
      ) : (
          <CoolButton text = {"Logout"} onClick={logout} />
      )}
    </>
  );
}

export default Login;
