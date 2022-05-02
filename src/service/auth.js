import { getAuth, signInWithPopup } from "firebase/auth";

const githubAuth = ( provider ) => {
    const auth = getAuth();
    return signInWithPopup(auth, provider)
      .then((result) => {

        // console.log(result)
        return result

      }).catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.email;

        return {
          errorCode,
          errorMessage,
          email,
        }
    });
}

export default githubAuth


