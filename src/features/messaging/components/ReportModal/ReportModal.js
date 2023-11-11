import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import TextArea from "../../../../components/form/TextArea/TextArea";
import Button from "../../../../components/ui/Button/Button";
import Modal from "../../../../components/ui/Modal/Modal";
import { useUser } from "../../../../context/UserContext";
import submitReport from "../../utils/submitReport";
import ReportModalCSS from "./ReportModal.module.css";

function ReportModal({
  reportModalIsOpen,
  setReportModalIsOpen,
  reportedUserId,
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      <Modal
        isOpen={reportModalIsOpen}
        handleClose={() => setReportModalIsOpen(false)}
        title={"Report user"}
        className={ReportModalCSS["report-modal"]}
      >
        <form
          action=""
          className={ReportModalCSS["report-form"]}
          onSubmit={handleSubmit((data, e) => {
            setIsSubmitting(true);
            e.preventDefault();

            submitReport(data, reportedUserId, user.id);
            setReportModalIsOpen(false);
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
                "Help us understand by detailing what the user's offense was...",
              min: 20,
              className: ReportModalCSS["reason-input"],
            }}
            formData={{ register, errors }}
          />
          <Button
            options={{
              notRounded: true,
              text: "Submit report",
              type: "burgundy-filled",
              className: ReportModalCSS["submit-btn"],
            }}
            disabled={isSubmitting}
          />
        </form>
      </Modal>
    </>
  );
}

export default ReportModal;
