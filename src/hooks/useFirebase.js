import app from "../firebase.init";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const auth = getAuth(app);

const useFirebase = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    return {
        user,
        signInWithGoogle,
        logout
    }

}

export default useFirebase;