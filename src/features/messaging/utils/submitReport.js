import { doc, setDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { db } from "../../../lib/firebase";

export default async function submitReport(data, selectedChat) {
  const report = {
    reason: data.reason,
    userId: selectedChat[1].userInfo.id,
  };

  await setDoc(doc(db, "reports", uuid()), report);
}
