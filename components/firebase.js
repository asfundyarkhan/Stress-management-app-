// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCGZkgmnPBUipQ8hOC_11AdpCsF6W6CTE0',
  authDomain: 'smt1-fyp.firebaseapp.com',
  projectId: 'smt1-fyp',
  storageBucket: 'smt1-fyp.appspot.com',
  messagingSenderId: '799627630530',
  appId: '1:799627630530:web:1c474f5fcd89008f2b285b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
export default authentication;
