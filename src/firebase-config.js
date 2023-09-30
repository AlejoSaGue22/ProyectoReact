
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBXs-GJ4mLfUJKC56R4QHm8VILLPteN-Vc",
  authDomain: "authentication-proyecto.firebaseapp.com",
  projectId: "authentication-proyecto",
  storageBucket: "authentication-proyecto.appspot.com",
  messagingSenderId: "20857067370",
  appId: "1:20857067370:web:6056407f23700e5f507713",
  measurementId: "G-NXH03BZMDC"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);