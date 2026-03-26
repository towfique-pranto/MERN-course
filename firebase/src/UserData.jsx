import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signOutUser } from "./firebase/firebase.config";

function UserData() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <img src={user.photoURL} />
      <h1>{user.displayName}</h1>
      <p>{user.email}</p>
      <button onClick={() => signOutUser()}>Sign out</button>
    </div>
  );
}

export default UserData;
