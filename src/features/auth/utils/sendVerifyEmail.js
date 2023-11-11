import { httpsCallable } from "firebase/functions";
import { functions } from "../../../lib/firebase";

export default async function sendVerifyEmail(userName, userEmail) {
  const sendVerifyEmail = httpsCallable(functions, "sendVerifyEmail");

  sendVerifyEmail({ userName: userName, userEmail: userEmail }).then(
    (result) => {
      // Read result of the Cloud Function.
      console.log(result.data);
    }
  );
}
