/* eslint-disable class-methods-use-this */
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAcpboHXbzLTczPhDbbYSCGYTukaUmrssY',
  authDomain: 'squidroerecords-429bf.firebaseapp.com',
  projectId: 'squidroerecords-429bf',
  storageBucket: 'squidroerecords-429bf.appspot.com',
  messagingSenderId: '148355988672',
  appId: '1:148355988672:web:8936a799aed018ab548125',
  measurementId: 'G-1NGZC16H9R',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
