import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDbI0U30mu-aarveIXyRAZC3MzbAS6xSvg",
    authDomain: "webwalker-dataset.firebaseapp.com",
    projectId: "webwalker-dataset",
    storageBucket: "webwalker-dataset.appspot.com",
    messagingSenderId: "30894506177",
    appId: "1:30894506177:web:bc057b47d81e52f70d9440"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getCities() {
    const citiesCol = collection(db, 'test');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }
  