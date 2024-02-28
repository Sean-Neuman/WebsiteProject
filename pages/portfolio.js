import GlobalStyles from "../components/styles/Global";
import { ThemeProvider } from "styled-components";
import { Container } from "../components/styles/container.styled";
import Header from "../components/header";
import Title from "../components/title";
import { useEffect, useState } from "react";
import Login from "../components/login";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";
import CoolButton from "../components/coolButton";
import {
  LoginPage,
  Form,
  Input,
  Button,
  Message,
  Link,
} from "../components/styles/login.styled";
import { db } from "../firebase-config";
import {
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getDocs, collection } from "firebase/firestore";
import { StyledTitle } from "../components/styles/title.styled";
import ProjCard from "../components/projCard";
import { RowDiv } from "../components/styles/rowdiv.styled";

const theme = {
  colors: {
    primary: "black",
    secondary: "mediumaquamarine",
    third: "#mediumseagreen",
    fourth: "#ffffff",
  },
};

export default function Portfolio() {
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

  const [porjList, setProjList] = useState([]);

  const projectCollectionRef = collection(db, "projects");

  useEffect(() => {
    const getProjList = async () => {
      // ... get projects
      try {
        const projList = await getDocs(projectCollectionRef);
        const filteredProjList = projList.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProjList(filteredProjList);
        console.log(filteredProjList);
      } catch (error) {
        console.log(error);
      }
    };
    getProjList();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <Header />
        <Container>
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
                            onChange={(event) =>
                              setRegisterEmail(event.target.value)
                            }
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
                            onChange={(event) =>
                              setLoginEmail(event.target.value)
                            }
                          />
                          <Input
                            placeholder="Password"
                            onChange={(event) =>
                              setLoginPassword(event.target.value)
                            }
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
                          <Link onClick={toggleRegisterForm}>
                            Create an account
                          </Link>
                        )}
                      </Message>
                    </Form>
                  </LoginPage>
                ) : (
                    <Container>
                  <Button onClick={toggleFormTrue}>Login</Button>
                  <h2> For my privacy, please login to view my projects. </h2>
                    </ Container>
                )}
              </>
            ) : (
              <Container>
                <Button onClick={logout}> Logout </Button>

                <StyledTitle>Projects</StyledTitle>
                <RowDiv>
                    {porjList.map((proj) => (
                        <div>
                        <ProjCard data={proj}/>
                        </div>
                    ))}
                </RowDiv>
              </Container>
            )}
          </>
        </Container>
      </>
    </ThemeProvider>
  );
}
