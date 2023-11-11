import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
  listing,
}) {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  async function handleSubmitReview(data, e) {
    setIsSubmitting(true);
    await submitReview(data, e, selectedChat, user, listing);
    setReviewModalIsOpen(false);
    navigate(`/profile/${selectedChat[1].userInfo.id}/reviews`);
    toast.success("Review submitted", {
      autoClose: 3000,
      theme: "colored",
    });
  }

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
          onSubmit={handleSubmit(handleSubmitReview)}
        >
          <div className={ReviewModalCSS["review-rating"]}>
            <Controller
              name="rating"
              control={control}
              rules={{ required: "Please provide a rating" }}
              render={({ field: { onChange } }) => (
                <Rating
                  className={ReviewModalCSS["rating"]}
                  fillColor={"var(--tradeable-burgundy)"}
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
              text: "Submit review",
              type: "burgundy-filled",
              className: ReviewModalCSS["submit-btn"],
            }}
            disabled={isSubmitting}
          />
        </form>
      </Modal>
    </>
  );
}

export default ReviewModal;
