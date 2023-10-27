import { doc, setDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { db } from "../../../lib/firebase";

export default async function submitReport(data, reportedUserId, userId) {
  const report = {
    reason: data.reason,
    reportedUserId: reportedUserId,
    userId: userId,
  };

  await setDoc(doc(db, "reports", uuid()), report);
}
