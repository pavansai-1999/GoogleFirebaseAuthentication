import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}


/*
import { createContext, useContext, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"
import {auth} from "../firebase"
//create
const userAuthContext=createContext()


export function UserAuthContextProvider({children}){
    const [user,SetUser]=useContext()
    //signin
    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //login
    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    //use effect
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            SetUser(currentUser)
        })
        return()=>{
            unsubscribe()
        }
        
    },[])


    return(
        //provider
        <userAuthContext.Provider value={{signUp,logIn}} >{children}</userAuthContext.Provider>
    )


}
//useContext
export function useUserAuth(){
    return useContext(userAuthContext)
}
*/