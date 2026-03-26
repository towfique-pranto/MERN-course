import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase.config";

function PrivateComponent({ children }) {
  const [user] = useAuthState(auth);
  console.log(user);
  return <div>{user ? children : <div>Please login</div>}</div>;
}

export default PrivateComponent;
