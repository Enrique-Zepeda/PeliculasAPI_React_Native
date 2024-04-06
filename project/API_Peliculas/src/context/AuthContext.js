import { createContext, useContext, useEffect, useState } from "react";
import * as AuthSession from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../credenciales";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

const googleConfig = {
  clientId:
    "44597801307-7nlmj6k528knbe2ff94h238qt8kb62eg.apps.googleusercontent.com",
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [request, response, promptAsync] =
    Google.useIdTokenAuthRequest(googleConfig);
  const signup = async (email, password, name) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(userCredential.user);
      await addDoc(collection(db, "Users"), {
        uid: userCredential.user.uid,
        name: name,
        email: email,
      });
    } catch (error) {
      console.error("Ha ocurrido un error durante el registro:", error.message);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (!userCredential.user.emailVerified) {
        throw new Error("auth/email-verification");
      }
    } catch (error) {
      console.error(
        "Ha ocurrido un error durante el inicio de sesion:",
        error.message
      );
      throw error;
    }
  };

  useEffect(() => {
    // Maneja la respuesta aquí, fuera de la función async.
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(() => {
          // Haz algo después de iniciar sesión exitosamente.
        })
        .catch((error) => {
          // Maneja los errores aquí.
          console.error(error);
        });
    }
  }, [response]);

  const loginWithGoogle = () => {
    promptAsync();
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        loading,
        loginWithGoogle,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
