import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDOpmYCfHl5eD9imEKSEGZyFF1V_Twcjfg",
  authDomain: "ecommerce-app-ea0a9.firebaseapp.com",
  projectId: "ecommerce-app-ea0a9",
  storageBucket: "ecommerce-app-ea0a9.appspot.com",
  messagingSenderId: "740382253053",
  appId: "1:740382253053:web:f2a43cc9c49582f6e64394"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app
