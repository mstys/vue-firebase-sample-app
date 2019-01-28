<template>
  <div class="login-wrapper">
    <h3>Sign up</h3>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from 'firebase';
import { ui } from '../firebaseConfig';
import 'firebaseui/dist/firebaseui.css';

export default {
  name: 'login',
  mounted() {
    ui.start('#firebaseui-auth-container', {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          console.log(authResult, redirectUrl);
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        }
      },
      signInFlow: 'popup',
      signInSuccessUrl: '/dashboard',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        {
          customParameters: {
            // Forces account selection even when one account
            // is available.
            // prompt: 'select_account'
          }
        }
      ]
    });
  }
};
</script>

<style lang="scss" scoped>
#firebaseui-auth-container {
  width: 100%;
}

.login-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
