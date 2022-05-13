// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCJiJHNppmL0G9E2LTSNHAkRzmobRciSY0',
  authDomain: 'sparta-react-basic-e12ad.firebaseapp.com',
  projectId: 'sparta-react-basic-e12ad',
  storageBucket: 'sparta-react-basic-e12ad.appspot.com',
  messagingSenderId: '826461707228',
  appId: '1:826461707228:web:2a0950449695ae2d730d19',
  measurementId: 'G-DN722RVMNM',
};

// 파이어베이스라는 파일을 호출해주는 그 순간에 파이어베이스를 쓸수있도록 초기화(기초설정)을 해준다
initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
