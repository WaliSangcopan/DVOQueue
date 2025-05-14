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

// Sign up
window.register = () => {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Account created!");
      window.location.href = "dashboard.html"; // ✅ Redirect after signup (optional)
    })
    .catch(error => alert(error.message));
};

// Sign in
window.login = () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Logged in!");
      window.location.href = "dashboard.html"; // ✅ Redirect to dashboard
    })
    .catch(error => alert(error.message));
};

// Log out
window.logout = () => {
  signOut(auth).then(() => {
    alert("Logged out!");
    window.location.href = "index.html"; // Optional: return to homepage
  });
};

// Display user
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
