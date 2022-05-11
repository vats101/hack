import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js';
const firebaseConfig = {
  apiKey: "AIzaSyB_qETxhqyoLkZMp0RmprNOGbTBxy4Mt6E",
  authDomain: "artifexers.firebaseapp.com",
  projectId: "artifexers",
  storageBucket: "artifexers.appspot.com",
  messagingSenderId: "1003653458105",
  appId: "1:1003653458105:web:b36786c756838afe731368"
};

// Use this to initialize the firebase App
const app = initializeApp(firebaseConfig);

// Use these for db & auth
const db = getFirestore(app);
const auth = getAuth(app);
export default db;