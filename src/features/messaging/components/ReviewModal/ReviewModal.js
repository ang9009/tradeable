import { Controller, useForm } from "react-hook-form";
import { Rating } from "react-simple-star-rating";
import { toast } from "react-toastify";
import InputMessage from "../../../../components/form/InputMessage/InputMessage";
import TextArea from "../../../../components/form/TextArea/TextArea";
import Button from "../../../../components/ui/Button/Button";
import Modal from "../../../../components/ui/Modal/Modal";
import { useUser } from "../../../../context/UserContext";
import submitReview from "../../utils/submitReview";
import ReviewModalCSS from "./ReviewModal.module.css";

function ReviewModal({
  reviewModalIsOpen,
  setReviewModalIsOpen,
  selectedChat,
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

  return (
    <>
      <Modal
        isOpen={reviewModalIsOpen}
        handleClose={() => setReviewModalIsOpen(false)}
        title={"Leave a review"}
        className={ReviewModalCSS["review-modal"]}
      >
        <form
          action=""
          className={ReviewModalCSS["review-form"]}
          onSubmit={handleSubmit((data, e) => {
            submitReview(data, e, selectedChat);
            setReviewModalIsOpen(false);
            toast.success("Review submitted!", { autoClose: 3000 });
          })}
        >
          <div className={ReviewModalCSS["review-rating"]}>
            <Controller
              name="rating"
              control={control}
              rules={{ required: "Please provide a rating" }}
              render={({ field: { onChange } }) => (
                <Rating
                  className={ReviewModalCSS["rating"]}
                  onClick={onChange}
                  quiet={true}
                />
              )}
            />
            <InputMessage
              message={errors["rating"]?.message}
              className={ReviewModalCSS["rating-error"]}
              isError
            />
          </div>
          <TextArea
            options={{
              label: "Message",
              placeholder:
                "Leave a review for the buyer/seller. You can mention factors such as friendliness, responsiveness, etc.",
              min: 10,
              className: ReviewModalCSS["message-input"],
            }}
            formData={{ register, errors }}
          />
          <Button
            options={{
              notRounded: true,
              text: "Submit",
              type: "burgundy-filled",
              className: ReviewModalCSS["submit-btn"],
            }}
          />
        </form>
      </Modal>
    </>
  );
}

export default ReviewModal;
