// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MSG_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID
// };

// export default firebaseConfig;


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAKyq9rksdDvWW2JrYPiF63Qv_PJMdurJ4",
//   authDomain: "ecommerce-adc5c.firebaseapp.com",
//   projectId: "ecommerce-adc5c",
//   storageBucket: "ecommerce-adc5c.appspot.com",
//   messagingSenderId: "443886359254",
//   appId: "1:443886359254:web:4e2e6b8be5fca915adaf77"
// };
// export default firebaseConfig;
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAKyq9rksdDvWW2JrYPiF63Qv_PJMdurJ4",
  authDomain: "ecommerce-adc5c.firebaseapp.com",
  projectId: "ecommerce-adc5c",
  storageBucket: "ecommerce-adc5c.appspot.com",
  messagingSenderId: "443886359254",
  appId: "1:443886359254:web:4e2e6b8be5fca915adaf77"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };