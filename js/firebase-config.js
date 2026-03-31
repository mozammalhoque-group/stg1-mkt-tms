import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyD2m3nh7rCjV-MEwXwH-fXxScQbnSGEAdg",
authDomain: "dashboard---beta.firebaseapp.com",
projectId: "dashboard---beta",
storageBucket: "dashboard---beta.firebasestorage.app",
messagingSenderId: "372309336318",
appId: "1:372309336318:web:e565dcc8c3972dc0d105af"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
