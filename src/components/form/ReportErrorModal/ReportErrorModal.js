import { doc, setDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { useUser } from "../../../context/UserContext";
import { db } from "../../../lib/firebase";
import Button from "../../ui/Button/Button";
import Modal from "../../ui/Modal/Modal";
import TextArea from "../TextArea/TextArea";
import ReportErrorModalCSS from "./ReportErrorModal.module.css";

function ReportErrorModal({
  reportErrorModalIsOpen,
  setReportErrorModalIsOpen,
}) {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const { user } = useUser();
  const navigate = useNavigate();

  async function submitReport(data, userId) {
    const report = {
      reason: data.reason,
      userId: userId,
    };

    await setDoc(doc(db, "errorReports", uuid()), report);
  }

  return (
    <>
      <Modal
        isOpen={reportErrorModalIsOpen}
        handleClose={() => setReportErrorModalIsOpen(false)}
        title={"Report an error"}
        className={ReportErrorModalCSS["report-error-modal"]}
      >
        <form
          action=""
          className={ReportErrorModalCSS["report-form"]}
          onSubmit={handleSubmit((data, e) => {
            e.preventDefault();
            submitReport(data, user.id);
            setReportErrorModalIsOpen(false);
            toast.success("Report submitted", {
              autoClose: 3000,
              theme: "colored",
            });
          })}
        >
          <TextArea
            options={{
              label: "Reason",
              placeholder:
                "Help us understand by detailing the issue that occurred and what caused it...",
              min: 20,
              className: ReportErrorModalCSS["reason-input"],
            }}
            formData={{ register, errors }}
          />
          <Button
            options={{
              notRounded: true,
              text: "Submit report",
              type: "burgundy-filled",
              className: ReportErrorModalCSS["submit-btn"],
            }}
          />
        </form>
      </Modal>
    </>
  );
}

export default ReportErrorModal;
