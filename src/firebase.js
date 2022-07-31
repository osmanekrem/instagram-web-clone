import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { userHandle } from "utils";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MEASSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

onAuthStateChanged(auth, async user => {
    if (user) {
        const dbUser = await getDoc(doc(db, "users", user.uid));
        let data = {
            uid: user.uid,
            email: user.email,
            fullName: user.displayName,
            emailVerified: user.emailVerified,
            ...dbUser.data(),
        }
        userHandle(data);
    } else {
        userHandle(false);
    }
})

export const getUserInfo = async uname => {
    const username = await getDoc(doc(db, "usernames", uname));
    if (username.exists) {
        return (await getDoc(doc(db, "users", username.data().user_id))).data();
    } else {
        throw new Error("User not found");
    }
}

export const register = async ({email, password, fullName, username}) => {
    try {
        const user = await getDoc(doc(db, "usernames", username));
        if (user.exists()) {
            toast.error("Username already exists");
        } else {

            const response = await createUserWithEmailAndPassword(auth, email, password);

            if (response) {


                await setDoc(doc(db, "usernames", username), {
                    user_id: response.user.uid,
                });

                await setDoc(doc(db, "users", response.user.uid), {
                    fullName,
                    username,
                    followers: [],
                    following: [],
                    notifictaions: [],
                    website: "",
                    bio: "",
                    phoneNumber: "",
                    gender: "",
                    posts: 0
                })

                await updateProfile(auth.currentUser, {
                    displayName: fullName,
                })

                return response.user;
            }
        }
    } catch (error) {
        toast.error(error.code);
    }
}

export const login = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        return response;
    } catch (error) {
        toast.error(error.code);
    }
}

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        toast.error(error.code);
    }
}