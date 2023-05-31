import { firebase, FieldValue } from "../lib/firebase";

export const doesUsernameExists = async (username) => {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.length > 0;
};

export const createUser = async (username, fullname, email, password) => {
  const createdUser = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);

  await createdUser.user.updateProfile({ displayName: username });

  await firebase.firestore().collection("users").add({
    userId: createdUser.user.uid,
    username: username.toLowerCase(),
    fullname,
    email: email.toLowerCase(),
    followers: [],
    following: [],
  });
};
