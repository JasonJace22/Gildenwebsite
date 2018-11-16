/*
export function someAction (context) {
}
*/
import * as firebase from 'firebase';
import newFirebaseGildewebsite from './fbdata';

export const FirebaseSetup = ({ commit }) => {
  if (firebase.apps.length) {
    // dann mach nix :)
    return;
  }
  const firebaseGildenwebsite = newFirebaseGildewebsite;
  commit('setFirebase', firebase.initializeApp(firebaseGildenwebsite, 'Gildenwebsite'));
};

export const ResetError = ({ commit }) => {
  commit('resetError');
};
