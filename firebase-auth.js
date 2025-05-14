// Firebase v9 Modular SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCNRgcBUInxilBTlvaLCxHVXiLlq8iTUPA",
  authDomain: "dvoqueue.firebaseapp.com",
  projectId: "dvoqueue",
  storageBucket: "dvoqueue.appspot.com",
  messagingSenderId: "983411204177",
  appId: "1:983411204177:web:5c79aed718bb68b3f79870"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up Function
window.register = () => {
  const email = document.getElementById("regEmail")?.value;
  const password = document.getElementById("regPassword")?.value;

  if (!email || !password) return alert("Please fill in all fields.");

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Account created!");
      window.location.href = "login.html"; // Redirect to login after signup
    })
    .catch(error => alert(error.message));
};

// Sign In Function
window.login = () => {
  const email = document.getElementById("loginEmail")?.value;
  const password = document.getElementById("loginPassword")?.value;

  if (!email || !password) return alert("Please enter email and password.");

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Logged in!");
      window.location.href = "dashboard.html"; // Redirect to dashboard after login
    })
    .catch(error => alert(error.message));
};

// Log Out Function
window.logout = () => {
  signOut(auth)
    .then(() => {
      alert("Logged out!");
      window.location.href = "index.html"; // Optional: go to homepage
    })
    .catch(error => alert("Logout failed: " + error.message));
};

// Display Welcome Message (optional)
onAuthStateChanged(auth, user => {
  const display = document.getElementById("userDisplay");
  if (display) {
    if (user) {
      display.innerText = "Welcome, " + user.email;
      display.style.display = "block";
    } else {
      display.innerText = "";
      display.style.display = "none";
    }
  }
});
