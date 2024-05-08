import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../../credenciales";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

const fetchUserData = async (uid) => {
  console.log("Intentando recuperar datos para UID:", uid);
  const usersRef = collection(db, "Users");
  const q = query(usersRef, where("uid", "==", uid));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const userData = querySnapshot.docs[0].data(); // Asumiendo que siempre hay 1 coincidencia
    console.log("Documento encontrado:", userData);
    return userData.name; // Asegúrate de que estás devolviendo los datos necesarios
  } else {
    console.log("No such document! Final");
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email, password, name) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(userCredential.user);
      const docRef = await addDoc(collection(db, "Users"), {
        uid: userCredential.user.uid,
        name: name,
        email: email,
      });
      console.log("Documento creado con ID: ", docRef.id);
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

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      if (currentUser) {
        const userName = await fetchUserData(currentUser.uid);
        setUser((prevState) => ({ ...prevState, name: userName }));
      }
      setLoading(false);
    });
    return () => unsubscribe(); // Limpieza del efecto
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
