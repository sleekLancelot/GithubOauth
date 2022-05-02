import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDl0gfv3uWncFaHfsCZze2GeMeH2cAAVxc",
  authDomain: "nanaue-3cf0b.firebaseapp.com",
  projectId: "nanaue-3cf0b",
  storageBucket: "nanaue-3cf0b.appspot.com",
  messagingSenderId: "780111393657",
  appId: "1:780111393657:web:b4d3058aeb72e34ac9b5a8",
  measurementId: "G-NM4SGR9P9B"
};

const app = initializeApp(firebaseConfig);

export default app